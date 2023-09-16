const express = require('express');

const signUpRouter = express.Router();

signUpRouter.get('/', (req, res) => {
    res.send("welcome to signup page");
});

module.exports = signUpRouter;