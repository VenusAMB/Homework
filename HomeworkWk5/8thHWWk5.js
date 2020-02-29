// Exercise server part 2
// Make it a web server so that when a browser navigates to 
// "localhost:8080/about" you server a html web page.

var http = require('http');
http.createServer(function (req, res) { 
   res.writeHead(500, {'Content-Type': 'text/html'}); 

   res.write('cbc8 says hello!');
      
    res.end();

}).listen(8080);