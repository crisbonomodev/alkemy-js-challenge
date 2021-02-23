const express = require('express');
const UserController = require('../controllers/UserController'); 
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//GET
app.get('/user', UserController.getUser);
app.get('/user/:username', UserController.getUser);
//POST
app.post('/user', UserController.createUser);
//PUT
app.put('/user/:id',UserController.updateUserById);
//DELETE
app.delete('/user/:id', UserController.deleteUserById);
   
module.exports = app;