// var http = require('http');
// var fs = require('fs');

// const PORT=8080; 

// fs.readFile('./learnCSS/index.html', function (err, html) {

//     if (err) throw err;    

//     http.createServer(function(request, response) {  
//         response.writeHeader(200, {"Content-Type": "text/html"});  
//         response.write(html);  
//         response.end();  
//     }).listen(PORT);
// });

const http = require('http');
const fs = require('fs');
const path = require('path');

const router = {
  home: (request, response) => {
    if (request.url === '/' || request.url === './heap_frontend/mainpage_firstClick.html') {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      fs.readFile('./heap_frontend/mainpage_firstClick.html', (err, data) => {
        if (err) {
          response.writeHead(500);
          response.end('Error loading index.html');
        } else {
          response.end(data);
        }
      });
    }
  },
  css: (request, response) => {
    if (request.url.endsWith('.css')) {
      const cssPath = path.join(__dirname, request.url);
      fs.readFile(cssPath, (err, data) => {
        if (err) {
          response.writeHead(404);
          response.end('CSS file not found');
        } else {
          response.writeHead(200, { 'Content-Type': 'text/css' });
          response.end(data);
        }
      });
    }
  },
  images: (request, response) => {
    const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.bmp'];
    const extname = path.extname(request.url);
    if (imageExtensions.includes(extname)) {
      const imgPath = path.join(__dirname, request.url);
      fs.readFile(imgPath, (err, data) => {
        if (err) {
          response.writeHead(404);
          response.end('Image file not found');
        } else {
          const contentType = 'image/' + extname.slice(1);
          response.writeHead(200, { 'Content-Type': contentType });
          response.end(data);
        }
      });
    }
  }
};




const server = http.createServer((request, response) => {
  router.css(request, response);
  router.images(request, response);
  router.home(request, response);
});

server.listen(8080, () => {
  console.log('Server is listening on port 8080');
});
