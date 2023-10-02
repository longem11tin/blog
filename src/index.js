const express = require('express');
const morgan = require('morgan');
const path = require('path'); 
const { engine } = require('express-handlebars');
const fs = require('fs');
const app = express();
const port = 3000;

// HTTP Logger
let acessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flag: 'a'});
// app.use(morgan('combined'))
app.use(morgan('combined', {stream: acessLogStream}));

// Template engine
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/trangchu',(req, res) => {
    res.send('hello, world!')
})

app.listen(port, () => {    
    console.log(`Example app listening on port ${port}`)
})