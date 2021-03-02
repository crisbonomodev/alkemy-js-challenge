const { DataTypes } = require('sequelize');
const db = require('../db/db.js');

const Balance = db.define('Balance', {

  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  balance: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  createdAt: {
    type: DataTypes.STRING,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false,
});

module.exports = Balance;