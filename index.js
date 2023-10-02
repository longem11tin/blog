const express = require('express')
const morgan = require('morgan')
const port = 3000
// const fs = require('fs')
// const path = require('path')

var app = express()


app.use(morgan('combined'))

app.get('/', (req, res) => {
    res.send('hello, world!')
})

app.get('/trangchu',(req, res) => {
    res.send('hello, world!')
})

app.listen(port, () => {    
    console.log(`Example app listening on port ${port}`)
})