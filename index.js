var express = require('express')
var fs = require('fs')
var morgan = require('morgan')
var path = require('path')
const port = 4000

var app = express()

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))

app.get('/tin-tuc', function (req, res) {
    res.send('hello, world!')
})

app.listen(port, () => {    
    console.log(`Example app listening on port ${port}`)
})