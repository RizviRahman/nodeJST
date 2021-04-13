const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
    // console.log(req);
    res.setHeader('Content-Type','text/html');
    fs.readFile('../views/index.html',(err,data)=>{
        if(err){
            console.log(err);
            res.end();
        } else {
            // res.write();
            res.end(data);
        }
    });
    
});

server.listen(3000, 'localhost', ()=>{
    console.log('listening for requests on port 3000')
});