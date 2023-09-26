const express = require('express');
const UserModel = require('../Models/UserModel');
const { EncriptedData } = require('../Tools/Encript');

const signUpRouter = express.Router();

signUpRouter.get('/', (req, res) => {
    res.send("welcome to signup page");
});

signUpRouter.post('/', async (req, res) => {
    let data = req.body;
    data.password = EncriptedData(data.password)
    const doc = new UserModel(data);
    try {
        await doc.save()
        res.status(200).send(data);
    } catch (e) {
        res.status(406).send(e.message);
        res.end();
    }
});

module.exports = signUpRouter;