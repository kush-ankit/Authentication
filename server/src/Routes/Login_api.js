const express = require('express');
const mongoose = require('mongoose');
const UserSchema = require('../Schema/UserSchema')

const loginRouter = express.Router();

loginRouter.get('/', (req, res) => {
    res.send("welcome to Login page");
});


loginRouter.post('/', (req, res) => {
    let data = req.body;
    console.log(data);
    const userModel = mongoose.model('registereduser', UserSchema);
    const doc = new userModel(data);
    doc.save(); 
    res.send(data);
});

module.exports = loginRouter;