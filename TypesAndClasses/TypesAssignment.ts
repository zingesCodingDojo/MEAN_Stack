// myNum = 5;
var myNum: number = 5;

// myString = "Hello Universe";
var myString: string = "Hello Universe";

// myArr = [1,2,3,4];
var myArr: Array<number> = [1, 2, 3, 4, 5];

// myObj = { name:'Bill'};
var myObj: object = {name: "Bill"};

// anythingVariable = "Hey";
var anythingVariable: any = "Hey";

// anythingVariable = 25;
var anythingVariable: any = 25;

// arrayOne = [true, false, true, true];
var arrayOne: Array<boolean> = [true, false, true, true];

// arrayTwo = [1, 'abc', true, 2];
var arrayTwo: Array<any> = [1, "abc", true, 2];

// myObj = { x: 5, y: 10 };
var myObj: object = {x: 5, y: 10};

// object constructor
// MyNode = (function () {
//     function MyNode(val) {
//         this.val = 0;
//         this.val = val;
//     }
//     MyNode.prototype.doSomething = function () {
//         this._priv = 10;
//     };
//     return MyNode;
// }());
// myNodeInstnace = new MyNode(1);
// console.log(myNodeInstnace.val);
class MyNode {
    val: number;
    _priv: number;
    constructor(val: number){
        this.val = val;
    }
    doSomething(){
        this._priv = 10;
    }
};
let myNodeInstance =  new MyNode(5);
console.log(myNodeInstance.val);


// function myFunction() {
//     console.log("Hello World");
//     return;
// }
function myFunction(val: string): void{
    val = "Hello World";
    console.log(val);
    return;
};

// function sendingErrors() {
// 	throw new Error('Error message');
// }
function sendingErrors(message: string): never{
    throw new Error(message);
}