const jwt = require('jsonwebtoken');

const privateKey = 'jsdhfsdhdflksihjdfhf';

const tokenGenerate = (data) => jwt.sign(data, privateKey);

const tokenVerify = (data) => jwt.verify(data, privateKey);

module.exports = { tokenGenerate, tokenVerify };