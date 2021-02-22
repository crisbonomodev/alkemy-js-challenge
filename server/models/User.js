const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db/db.js');


const User = db.define('User', {
  // Model attributes are defined here
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // Other model options go here
});

module.exports = User;