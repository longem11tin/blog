const express = require('express');
const morgan = require('morgan');
const path = require('path'); 
const { engine } = require('express-handlebars');
const fs = require('fs');
const app = express();
const port = 3000;

const route = require('./routes/index');

// Routes init
// route(app);  

// HTTP Logger
// let acessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flag: 'a'});
// app.use(morgan('combined'))
// app.use(morgan('combined'));

// Static file
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
    extended: true, 
}));  // gui dang form len sever
// app.use(express.json()); // gui dang codejs len server 

// XMLHttpRequest fetch axios 


// Template engine
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Routes config
// Routes init
route(app);

app.listen(port, () => {    
    console.log(`Example app listening on port ${port}`);
});