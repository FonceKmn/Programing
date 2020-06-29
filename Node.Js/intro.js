var http = require('http');
var fs = require('fs');


var server = http.createServer(function(req,res){

     if(req.url == '/'){
        fs.readFile('index.html',function(err,data){

            res.write(data);
            res.end('mesaj qutardi');
        });

     }

     if(req.url == '/sehife'){
        fs.readFile('index2.html',function(err,data){

            res.write(data);
            res.end('mesaj qutardi');
        });

     }




   

   // res.write('salamlar');
   // res.end('mesaj qutardi');
});

server.listen(8000);