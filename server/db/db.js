const { Sequelize } = require('sequelize');

module.exports = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: 'localhost',
    dialect:  'mssql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle:10000
    }
  });


  