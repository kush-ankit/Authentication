const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: String,
    phone: {
        type: String,
        unique: true
    },
    email: String,
    password: String
});

const UserModel = mongoose.model('registereduser', userSchema);


module.exports = UserModel;