const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    gender: String,
    phone: String,
    role: String,
    password : String,
});

const User = mongoose.model('user', userSchema);

module.exports = User;