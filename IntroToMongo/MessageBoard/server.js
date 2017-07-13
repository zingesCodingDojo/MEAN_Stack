const express = require("express");
const path = require("path");
const _PORT = 8000;
const bp = require("body-parser");
const goose = require("mongoose");
const app = express();
goose.connect("mongodb://localhost/MessageBoardMongoose");

app.use(bp.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "./static")));

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

const Schema = goose.Schema;
const postSchema = new goose.Schema({
    name: { type: String, required: true, minlength: 4},
    messageText: { type: String, required: true, minlength: 10},
    comments: [{ type: Schema.Types.ObjectId, ref: "CommentCollection"}]
}, { timestamps: true});
goose.model("PostCollection", postSchema);
const PostCollection = goose.model("PostCollection");
goose.Promise = global.Promise;


const commentSchema = new goose.Schema({
    _post: { type: Schema.Types.ObjectId, ref: "PostCollection"},
    commentName: { type: String, required: true, minlength: 4},
    commentText: { type: String, required: true, minlength: 5}
}, { timestamps: true });
goose.model("CommentCollection", commentSchema);
const CommentCollection = goose.model("CommentCollection");

app.get("/", (req, res) => {
    PostCollection.find({})
        .populate("comments")
        .exec((err, post) => {
            if(err){
                console.log("We got errors in retrieving info");
                console.log(err)
            }
            else{
                console.log(post)
                res.render("index", {context: post})
            } 
        });
});

app.post("/postMessage", (req, res) => {
    let newPost = new PostCollection({
        name: req.body.PostName,
        messageText: req.body.PostMessage
    });
    newPost.save((err) => {
        if(err){
            console.log("We could not make the post... Something went wrong.", err);
            
        }
        else{
            console.log("We successfully added a new post!");
        }
    });
    return res.redirect("/");
});

app.post("/addComment/:id", (req, res) => {
    PostCollection.findOne({_id: req.params.id}, (err, myPost) => {

        let newComment = new CommentCollection({commentName: req.body.CommentName, commentText: req.body.CommentMessage, _post: req.params.id});
        newComment._post = myPost._id;
        newComment.save((err) => {
            myPost.comments.push(newComment);
            myPost.save((err) => {
                if(err){
                    console.log("Could not make the new comment!");
                }
                else{
                    console.log("We successfully added a comment!");
                }
            });
        });
    });
    res.redirect("/");
});

const server = app.listen(_PORT, () => {});