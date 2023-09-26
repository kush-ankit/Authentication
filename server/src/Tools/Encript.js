const bcrypt = require("bcrypt");
const saltRounds = 10;

const salt = bcrypt.genSaltSync(saltRounds);

const EncriptedData = (data) => bcrypt.hashSync(data, salt);

const DecriptedData = (data, hash) => bcrypt.compareSync(data, hash);


module.exports = {EncriptedData,DecriptedData};

