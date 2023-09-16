const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    "phone": Number,
    "password": Number
});

module.exports = UserSchema;