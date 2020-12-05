const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: 'postgres',
    port: 5432,
    host: process.env.DATABASE_SERVER,
    define: {
      timestamps: false,
    },
  },
);

function getMaintenanceIncome() {
  return sequelize.query('SELECT * FROM maintenanceIncome', { type: sequelize.QueryTypes.SELECT });
}

module.exports.getMaintenanceIncome = getMaintenanceIncome;
module.exports.sequelize = sequelize;
