const http = require('http')

console.log(__filename);
console.log(__dirname);
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write("hello worlds haha")
        res.end()
    }
    if (req.url === '/api/users') {
        res.write(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8]))
        res.end()
    }
    
})


// server.on('connection', (socket) => {
//     console.log("New Connetion is established haha...");
// })
server.listen(3000)
console.log("listening on port 3000...");