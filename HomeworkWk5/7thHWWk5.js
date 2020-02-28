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


