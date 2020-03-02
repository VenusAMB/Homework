// Exercise server
// Setup a basic web server that when you navigate in your browser displays 
// the string "Hello, World!" in plain text.

// Place h1 tags around "Hello, World!". Display this string using the web 
// server as html.


var http = require('http');
http.createServer(function (req, res) { 
   res.write('<h1>Hello World!</h1>');
      
    res.end();
}).listen(8080);


// Exercise server part 2
// Make it a web server so that when a browser navigates to 
// "localhost:8080/about" you server a html web page.

// var http = require('http');
// http.createServer(function (req, res) { 
//    res.writeHead(200, {'Content-Type': 'text/html'}); 

//    res.write('cbc8 says hello!');
      
//     res.end();

// }).listen(8080);


