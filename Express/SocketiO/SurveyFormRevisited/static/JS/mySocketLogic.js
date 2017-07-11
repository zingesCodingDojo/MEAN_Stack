$(document).ready(function(){
    var formData = {};
    var socket = io.connect();
    $("#SurveyForm").submit(function(){
        event.preventDefault();
        var myForm = document.getElementById("SurveyForm");
        var newObject = {
            Name: myForm.Name.value,
            DojoLocation: myForm.DojoLocation.value,
            Language: myForm.Language.value,
            Comments: myForm.Comments.value
        }
        socket.emit("posting_form", {formInfo: newObject});

    });
    socket.on("server_response", function(data){
        myResults(data.response);
        console.log("The Server says: " + data.response);
        
    })
});

function myResults(e){
    let myNewDiv = document.createElement("div");
    myNewDiv.setAttribute("id", "resultsDiv");
    
    let myNewPTag = document.createElement("p");
    let myTextNode = document.createTextNode(`You emitted the following information on the server: { Name: ${e.Name}, DojoLocation: ${e.DojoLocation}, Language: ${e.Language}, Comments: ${e.Comments} }`);
    myNewPTag.appendChild(myTextNode);
    myNewDiv.appendChild(myNewPTag);

    let myRandoNumber = document.createElement("p");
    let randomNumber = Math.floor(Math.random() * 1000) + 1;
    let randoTextNode = document.createTextNode(`Your lucky number emitted by the server is: ${randomNumber}`);
    myRandoNumber.appendChild(randoTextNode);
    myNewDiv.appendChild(myRandoNumber);
    
    document.getElementById("header").appendChild(myNewDiv);
}