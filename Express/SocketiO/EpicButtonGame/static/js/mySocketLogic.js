$(document).ready(function(){
    var formData = {};
    var socket = io.connect();
    $("#counterButton").click(()=>{
        
        if(typeof counter == "undefined") {
            counter = 0;
        }
        else{
            counter += 1;
        }
        socket.emit("counting_numbers", {myCounter: counter});

    });
    socket.on("server_response", (data)=>{
        myNumber(data.response);
        console.log("The Server says: " + data.response);
    });
    $("#resetButton").click(()=>{
        counter = 0;
        socket.emit("counting_numbers", {myCounter: counter});
    })
});

function myNumber(e){
    let grabMyID = document.getElementById("myCounterID");
    $(grabMyID).empty();
    let textNode = document.createTextNode(e);
    grabMyID.appendChild(textNode);
}
