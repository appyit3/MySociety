const sqladapter = require('./sqladapter');

function getMaintenanceIncome() {
  return sqladapter.sequelize.query('SELECT * FROM maintenanceIncome', { type: sqladapter.sequelize.QueryTypes.SELECT });
}

module.exports.getMaintenanceIncome = getMaintenanceIncome;
