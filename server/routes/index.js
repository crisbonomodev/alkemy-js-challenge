const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));
//app.use(require('./auth'));
app.use(require('./user'));
//app.use(require('./transaction'));


module.exports = app;