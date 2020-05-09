require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');

const employeeController = require('./controllers/employeeController');

//// for flash messag  ////////////////
const session = require('express-session');
const flash = require('connect-flash');



var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');

//// for flash messag  ////////////////
app.use(session({
    secret: 'santanu',
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false,
    }));
app.use(flash());


app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});



app.use('/employee', employeeController);