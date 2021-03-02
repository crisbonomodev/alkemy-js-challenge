const express = require('express');
const BalanceController = require('../controllers/BalanceController');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/balance/', BalanceController.getBalance);
app.put('/balance/',BalanceController.updateBalance);
   
module.exports = app;