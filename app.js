const express = require('express');

const app = express();

const cookieParser = require('cookie-parser')

app.use(express.json());
app.use(express.urlencoded({extented: true}));
app.use(cookieParser())


const user = require('./routes/User');

// use Routes

app.use('/api/v1', user);

module.exports = app