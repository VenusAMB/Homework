// Exercise server part 2
// Make it a web server so that when a browser navigates to 
// "localhost:8080/about" you server a html web page.

var http = require('http');



http.createServer(function (req, res) { 
    /**
     * This didn't work because you sent a status of 100
     * a success status is 200 that's what you want to change I
     * comment out the 100 status and added the correct 200 one 
     * should work fine now. 
     */
   //res.writeHead(100, {'Content-Type': 'text/html'}); 
   res.writeHead(200, {"Content": "text/html"});

   res.write('cbc8 says hello!');
      
   res.end();
   /**
    * instead of res.write() then res.end() you can pass a string
    * or document contents inside of res.end. I.E.: res.end('cbc8 says hello!');
    */

}).listen(8080);