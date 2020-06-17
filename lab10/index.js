const http = require('http');
const html = `
<!doctype>
<html>	
    <head>
    <meta charset="utf-8">	
    <title>Борейко Node.js</title>
    
    </head>
    <body>
        <h1>Привет мир!</h1>
        <button><a href="picture.js">picture</button> 
      
    </body>
</html>`;
server = http.createServer((req,res) => {
    switch (req.url){
        case '/':
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(html);
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
	        res.end("404 error");
    }
	
}).listen(8888, () => console.log('server ON'));