const express = require('express'); // including express js 
const cookieParser = require('cookie-parser'); // including cookie-parser
const app = express(); // object of express module
const port = process.env.PORT || 8000; // defining port for local server or dynamic port for heroku
const expressLayouts = require('express-ejs-layouts'); // including express ejs layout

app.use(express.urlencoded());

app.use(cookieParser()); // using cookie parser

app.use(express.static('./assets'));// accessing static files

app.set('view engine', 'ejs'); //  setting up ejs as a view engine
app.set('views', './views'); //  setting up views from views folder

app.use('/', require('./routes')); // using router 
app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});