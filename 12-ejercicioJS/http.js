console.log("El archivo se está ejecutando");
const http = require('node:http')

const server = http.createServer((req, res) => {
    console.log('request received')
    res.end('Hola, mundo')
})

server.listen(0, () => {
    console.log(`el servidor esta escuchando en el puerto http://localhost:${server.address().port}`)
})