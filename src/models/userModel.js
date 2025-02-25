const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please provide a password']       
    },   
    role: {
        type: String,
        enum: ['user', 'admin', 'manager'],
        default: 'user'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);