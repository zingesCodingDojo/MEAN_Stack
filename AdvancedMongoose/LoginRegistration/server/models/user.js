var goose = require("mongoose"),
    Schema = goose.Schema,
    bcrypt = require("bcrypt"),
    SALT_WORK_FACTOIR = 10,
    MAX_LOGIN_ATTEMPTS = 5,
    LOCK_TIME = 2 * 60 * 60 * 1000;
require("mongoose-type-mail");

const UserSchema = new goose.Schema({
    first_name: {type: String, required: true, minlength: [4, "First name should be longer than 4 characters long..."]},
    last_name: {type: String, required: true, minlength: [4, "Last name should be longer than 4 characters long..."]},
    email: {type: goose.SchemaTypes.Email, required: true, index: {unique: true}},
    password: {type: String, required: true, minlength: 8},
    confirm_password: {type: String, required: true, minlength: 8},
    birthday: {type: Date, required: true},
    loginAttempts: { type: Number, required: true, default: 0 },
    lockUntil: { type: Number }
    }, 
    {timestamps: true}
);

UserSchema.virtual('isLocked').get(() => {
    return !!(this.lockUntil && this.lockUntil > Date.now());
});

UserSchema.pre("save", (next) => {
    var user = this;
    if(!user.isModified("password")){
        return next();
    }
    bcrypt.genSalt(SALT_WORK_FACTOIR, (error, salt) => {
        if(error){
            return next(error);
        }
        bcrypt.hash(user.password, salt, (error, hash) => {
            if(error){
                return next(error);
            }
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = (candidatePassword, cb) => {
    bcrypt.compare(candidatePassword, this.password, (error, isMatch) => {
        if(error){
            return cb(error);
        }
        cb(null, isMatch);
    });
};

UserSchema.methods.incLoginAttempts = (cb) => {
    if (this.lockUntil && this.lockUntil < Date.now()) {
        return this.update({
            $set: { loginAttempts: 1 },
            $unset: { lockUntil: 1 }
        }, cb);
    }
    var updates = { $inc: { loginAttempts: 1 } };
    
    if (this.loginAttempts + 1 >= MAX_LOGIN_ATTEMPTS && !this.isLocked) {
        updates.$set = { lockUntil: Date.now() + LOCK_TIME };
    }
    return this.update(updates, cb);
};

UserSchema.statics.failedLogin = {
    NOT_FOUND: 0,
    PASSWORD_INCORRECT: 1,
    MAX_ATTEMPTS: 2
};

UserSchema.statics.getAuthenticated = (email, password, cb) => {
    this.findOne({ email: email }, (err, user) => {
        if (err) return cb(err);

        // make sure the user exists
        if (!user) {
            return cb(null, null, reasons.NOT_FOUND);
        }

        // check if the account is currently locked
        if (user.isLocked) {
            // just increment login attempts if account is already locked
            return user.incLoginAttempts((err) => {
                if (err) return cb(err);
                return cb(null, null, reasons.MAX_ATTEMPTS);
            });
        }

        // test for a matching password
        user.comparePassword(password, (err, isMatch) => {
            if (err) return cb(err);

            // check if the password was a match
            if (isMatch) {
                // if there's no lock or failed attempts, just return the user
                if (!user.loginAttempts && !user.lockUntil){
                    return cb(null, user);
                }
                // reset attempts and lock info
                var updates = {
                    $set: { loginAttempts: 0 },
                    $unset: { lockUntil: 1 }
                };
                return user.update(updates, (err) => {
                    if (err){
                        return cb(err);
                    };
                    return cb(null, user);
                });
            }

            // password is incorrect, so increment login attempts before responding
            user.incLoginAttempts((err) => {
                if (err) return cb(err);
                return cb(null, null, reasons.PASSWORD_INCORRECT);
            });
        });
    });
};


module.exports = goose.model("User", UserSchema);