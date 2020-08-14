const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
require('../models/registrationModel')

const Registration = mongoose.model('Registration')

// app.get('/', (req, res) => { // new
//     res.sendFile('/index.html', {
//         root: view
//     })
// });

// // Saving to the database
// app.post('/', async (req, res) => {
//     console.log(req.body);
//     const addItem = new Registeration(req.body);
//     try {
//         await addItem.save();
//         console.log(req.body);
//         res.redirect('/')
//     } catch (err) {
//         res.send('Sorry! Something went wrong.')
//         console.log(err)
//     }
// })