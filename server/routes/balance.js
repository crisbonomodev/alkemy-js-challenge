const express = require('express');
const BalanceController = require('../controllers/BalanceController');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/balance/', BalanceController.getBalance);
app.post('/balance/', BalanceController.replaceBalance);
app.put('/balance/',BalanceController.updateBalance);
app.delete('/balance/',BalanceController.restoreBalance);   
module.exports = app;