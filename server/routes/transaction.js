const express = require('express');
const TransactionController = require('../controllers/TransactionController');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//GET
app.get('/transaction/', TransactionController.getTransaction);
//POST
app.post('/transaction/', TransactionController.createTransaction);
//PUT
//app.put('/transaction/:id',TransactionController);
//DELETE
//app.delete('/transaction/:id', TransactionController);
   
module.exports = app;