const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db/db.js');


const Transaction = db.define('Transaction', {
  // Model attributes are defined here
  concept: {
    type: DataTypes.STRING,
    allowNull: false
  },
  amount: {
    type: DataTypes.STRING,
    allowNull: false
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // Other model options go here
});

module.exports = Transaction;