var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response){

    if(request.url === '/') {
        fs.readFile('../views/cars.html', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    else if(request.url === '/cars/new') {
        fs.readFile('../views/carsForm.html', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    else if(request.url === '/stylesheets/jazzUp'){
        fs.readFile('../stylesheets/jazzUp.css', 'utf8', function(errors, contents){
        response.writeHead(200, {'Content-type': 'text/css'});
        response.write(contents);
        response.end();
        })
    }
    
    else if(request.url === '/images/audiA1.jpg'){
    // notice we won't include the utf8 encoding
        fs.readFile('../images/audiA1.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/audiA2.jpg'){
    // notice we won't include the utf8 encoding
        fs.readFile('../images/audiA2.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/audiA3.jpg'){
    // notice we won't include the utf8 encoding
        fs.readFile('../images/audiA3.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/audiS4.jpg'){
    // notice we won't include the utf8 encoding
        fs.readFile('../images/audiS4.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/audiA5.jpg'){
    // notice we won't include the utf8 encoding
        fs.readFile('../images/audiA5.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/audiA6.jpg'){
    // notice we won't include the utf8 encoding
        fs.readFile('../images/audiA6.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/audiA7.jpg'){
    // notice we won't include the utf8 encoding
        fs.readFile('../images/audiA7.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/audiA8.jpg'){
    // notice we won't include the utf8 encoding
        fs.readFile('../images/audiA8.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }

    else if (request.url === "/cats") {
         fs.readFile('../views/cats.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }
    else if(request.url === '/images/cat1.jpg'){
    // notice we won't include the utf8 encoding
        fs.readFile('../images/cat1.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/cat2.jpeg'){
    // notice we won't include the utf8 encoding
        fs.readFile('../images/cat2.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/cat3.jpg'){
    // notice we won't include the utf8 encoding
        fs.readFile('../images/cat3.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/cat4.jpeg'){
    // notice we won't include the utf8 encoding
        fs.readFile('../images/cat4.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }

    else {
        response.end('File not found!!!');
    }
});

server.listen(7077);