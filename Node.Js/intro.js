
var http = require('http'); //http portunu bildirmek ucundu
var fs = require('fs');   // filesystem modulu


var server = http.createServer(function(req,res){    // serverin yaradilmasi veisdifadeciden gelen request ve response ile ilgili

     if(req.url == '/'){    // req.url ile istifadeciden gelen get requestin sonlarina dogru
        fs.readFile('index.html',function(err,data){  // request olaraqdan htmli oxuyur ve respons edir

            res.write(data);            // isdifadeciye gonderilen
            res.end('mesaj qutardi ?? ');   // sehife sonlugu olaraq consoleden gorunur
        });

     }

     if(req.url == '/sehife'){    // sehife olan page url sonlugu olaraq
        fs.readFile('index2.html',function(err,data){

            res.write(data);            // bunun burda yazilmagi node.js in random readininge qarsi onlemdir
            res.end('mesaj qutardi');
        });

     }




   

   // res.write('salamlar');
   // res.end('mesaj qutardi');
});

server.listen(8000); // serverin qulaq asdigi port nomresi