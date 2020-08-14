const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    surName: {
        type: String,
    },
    givenName: {
        type: String,
        
    },
    dob: {
        type: String,
    },
    residence: {
        type: String,
    },
    occupation: {
        type: String,
        trim: true,
    },
    nationality: {
        type: Number,
        trim: true,
    },
    gender: {
        type: String,
    },
    category: {
        type: Number,
        trim: true,
    },
    
});

module.exports = mongoose.model('Register', registerSchema);