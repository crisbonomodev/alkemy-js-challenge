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
app.put('/transaction/',TransactionController.updateTransaction);
//DELETE
app.delete('/transaction/', TransactionController.deleteTransaction);
   
module.exports = app;