var Sequelize = require('sequelize');
var url = process.env.DATABASE_URL || 'postgres://localhost:5432/test';

var sequelize = new Sequelize(url, {
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

module.exports = sequelize;
