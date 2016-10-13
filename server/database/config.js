var Sequelize = require('sequelize'):
var url = process.env.DATABASE_URL || 'postgres://localhost:5432/test';

var sequelize = new Sequelize(url, {
  dialect: 'postgres',
  protocol: 'postgres',
  port: match[4],
  host: match[3],
  logging: true
});

module.exports = sequelize;
