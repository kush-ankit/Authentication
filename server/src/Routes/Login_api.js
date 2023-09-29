const express = require('express');
const UserModel = require('../Models/UserModel')
const { DecriptedData } = require('../Tools/Encript');
const { token, tokenGenerate } = require('../Tools/TokenHandler');

const loginRouter = express.Router();

loginRouter.get('/', (req, res) => {
    res.send("welcome to Login page");
});


loginRouter.post('/', async (req, res) => {
    let data = req.body;
    let fetchData = await UserModel.findOne({ phone: data.phone }).exec();
    if (fetchData !== null) {
        let tokentaken = tokenGenerate({
            fullName: fetchData.fullName,
            phone: fetchData.phone,
            email: fetchData.email,
            password: fetchData.password,
        })
        DecriptedData(data.password, fetchData.password)
            ? res.status(200).cookie(tokentaken).send({
                fullName: fetchData.fullName,
                phone: fetchData.phone,
                email: fetchData.email,
                password: fetchData.password,
            }) : res.status(204).send({ error: 'Password does not match' });
    } else {
        res.status(204).send({ error: data.phone + ' does not exist' });
    }

});

module.exports = loginRouter; 