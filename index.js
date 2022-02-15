const http =require('http');
const fs =require('fs');
const path =require('path');

const hostname ='127.0.0.1';
const port =5000;
const server = http.createServer((request,response)    => {
    response.writeHead( 200, {
'content-type':'text/html'
    });
    let url=request.url;
  
    if (url === '/'){
        fs.readFile(path.join(__dirname,'index.html'),(err,data)=>{
            if(err) throw err;
            response.end(data);  });
    }
 else if(url==='/about'){
    fs.readFile(path.join(__dirname,'about.html'),(err,data)=>{
        if(err) throw err;
        response.end(data);  });
 }
 else if(url==='/login'){
    fs.readFile(path.join(__dirname,'login.html'),(err,data)=>{
    
   
   
     if(err) throw err;
    response.end(data);  });}
   
 else {
    fs.readFile(path.join(__dirname,'erorr.html'),(err,data)=>{
        if(err) throw err;
        response.end(data);  });
 }


});
server.listen(port,hostname,()=>{
console.log('http://${hostname}:${port}');
}); 