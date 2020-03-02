var http = require('http');

http.createServer(function (req, res) {
    var url = req.url;

   if(url === '/') {
   res.write('Hello World!');
    res.end();  
   }
   
else if(url ==='/about') {
    res.write(' Welcome to the about page');
    res.end();
    
} 

}).listen(8080, function() {
    console.log("server start at port 8080");
});
//created route - can be used for differnt web pages on website
//endpoint = '/' and '/about' and it is what goes on the end of url