const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db/db.js');
const bcrypt = require('bcrypt');


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
  timestamps: false
});

User.encryptPassword = async function (password) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password,salt);
}

User.comparePassword =  async function (password,receivedPassword) {
  return await bcrypt.compare(password,receivedPassword);
}

module.exports = User;