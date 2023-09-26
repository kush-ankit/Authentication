const express = require('express');
const loginRouter = require('./Routes/Login_api');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const signUpRouter = require('./Routes/Signup_api');

require('dotenv').config();

const app = express();

mongoose.connect(process.env.MONGODB_CONNECTION).then(() => console.log('Connected!'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
    console.log("request recieved...");
    next();
});

app.use('/login', loginRouter);
app.use('/signup', signUpRouter);


app.get('/', (req, res) => {
    res.send('good')
});

app.listen(process.env.PORT,process.env.IP_ADDRESS, () => {
    console.log("listening on port", process.env.PORT);
});

