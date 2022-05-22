const http = require('http')
const fs = require('fs')


const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-type': 'text/plain'
    })
    
const readStream = fs.createReadStream(__dirname + '/readme.txt', 'utf-8')

readStream.pipe(res)


})

server.listen(3000, '127.0.0.1')