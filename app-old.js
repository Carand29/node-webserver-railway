const http = require('http');

const server = http.createServer((req, res)=> {

res.write('armando mi servidor')
res.end();    

}).listen(4000)

console.log('escuchando por el puerto 4000')