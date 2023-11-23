const express = require('express')
const app = express()
// const port = 3000

app.get('/', (req, res) =>{
    res.send("hello Ahita, how are you haha")
})

app.get('/api/courses', (req, res) => {
    res.send([1,2,3,4,5,6,7])
})

app.listen(3000 , () => {
    console.log("server is listening on port 3000...");
})