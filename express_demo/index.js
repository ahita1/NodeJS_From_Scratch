const express = require('express')
const app = express()
const port = 3000
const users = [1,2,3,4,5,6,7,8]

app.get('api/courese', (req, res) =>{
    console.log(res.json(users));
})

app.listen(port, () => {
    console.log("server is listening on port 3000...");
})