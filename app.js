const http  = require("http");

const PORT = 3000; 
const server = http.createServer((req, res) =>{
    res.write("Hello, Ashwin's Micro Project is working!");
    res.end();
}).listen(PORT, () => {
    console.log('Server running at http://localhost:${PORT}');
});