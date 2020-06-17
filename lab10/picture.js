require("http").createServer((req, res) => {
    if (req.url === "/") {
      res.statusCode = 200;
  
      res.setHeader("Content-Type", "image/png");
  
      require("fs").readFile("3head.png", (err, image) => {
        res.end(image);
      });
    }
  }).listen(3000, () => console.log('server ON'));
