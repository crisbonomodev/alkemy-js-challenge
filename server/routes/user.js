const express = require('express');
const UserController = require('../controllers/UserController'); 
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/user', UserController.getUser);
app.get('/user/:username', UserController.getUser);

app.put('/user/:id',UserController.updateUserById);

app.delete('/user/:id', UserController.deleteUserById);
   
module.exports = app;