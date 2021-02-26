const {Router} = require('express');
const express = require('express');
const app = express();
const {signIn,renewToken} = require('../controllers/authController');
const { createUser } = require('../controllers/UserController');
const { verifyToken } = require('../middlewares/verify-token');


app.post('/auth/signin',signIn);
app.post('/auth/signup', createUser);
app.get('/auth/renew',verifyToken,renewToken);

module.exports = app;