const express = require('express');
const loginRouter = require('./Routes/Login_api');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

mongoose.connect(process.env.MONGODB_CONNECTION)
  .then(() => console.log('Connected!'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
    console.log("request recieved...");
    next();
});

app.use('/login', loginRouter);



app.get('/', (req, res) => {
    res.send('Welcome');
});

app.listen(process.env.PORT, () => {
    console.log("listening on port", process.env.PORT);
});