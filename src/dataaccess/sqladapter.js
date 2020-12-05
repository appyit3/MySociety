const Sequelize = require('sequelize');
const debug = require('debug');

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: 'postgres',
    port: 5432,
    host: process.env.DATABASE_SERVER,
    logging: debug,
    define: {
      timestamps: false,
    },
  },
);

function getMaintenanceIncome() {
  debug('getMaintenanceIncome');
  return sequelize.query('SELECT * FROM maintenanceIncome');
}

module.exports.getMaintenanceIncome = getMaintenanceIncome;
module.exports.sequelize = sequelize;
