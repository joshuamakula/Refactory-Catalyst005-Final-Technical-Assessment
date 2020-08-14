const express = require('express');
const bodyParser = require('body-parser')
const multer = require('multer');
const expressSession = require('express-session')({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
});
const passport = require('passport');
require('dotenv').config();
const path = require('path');
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

require('./models/registrationModel')
const Registeration = mongoose.model('Register')
const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}))
// Database connection
mongoose.connect('mongodb://localhost:27017/testRegistration', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
}, function (err) {
    if (err) throw err;
    else
        console.log('You are live');
})

app.set('view engine', 'pug')
app.set('views', './views');





var view = "./views/"

// defining the directory with static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => { // new
    res.render('index')
});

// Saving to the database
app.post('/', async (req, res) => {
    // console.log(req.body);
    const reg = new Registeration(req.body);
    try {
        await reg.save();
        console.log(req.body);
        res.redirect('/')
    } catch (err) {
        res.send('Sorry! Something went wrong.')
        console.log(err)
    }
})


// No page found error
app.get('*', (req, res) => {
    res.send('Ooops! No page found');
});

// creating the server
app.listen(5000, () => console.log('Final Assessment listening on port 5000!'));