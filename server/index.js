const express = require('express')

const app = express()

app.get('/data',(req,res) => {
    const dummy = [
        {
            name: 'sarthak',
            city: 'Bhopal',
            age: 30
        }
    ]
    res.header('Access-Control-Allow-Origin', 'http://localhost:8000/data').json({data:dummy})
})
app.listen(8000,() =>{
    console.log("Server is started")
})