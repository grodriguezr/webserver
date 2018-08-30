const http = require('http');

http.createServer((req, res ) => {
    res.writeHead(200, {'content-type': 'application/json'});
    let salida = {
        nombre: 'Gustavo',
        edad: 27,
        ciudad: 'Cartagena',
        url: req.url
    }
    res.write(JSON.stringify(salida));
    // res.write('Hola mundo');
    res.end();
}).listen(8081);
console.log('Escuchando en puerto 8081');