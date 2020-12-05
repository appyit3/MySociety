const { sqlconnection } = require('./sqladapter');

function getMaintenanceIncome() {
  return sqlconnection.query('SELECT * FROM maintenanceIncome', { type: sqlconnection.QueryTypes.SELECT });
}

module.exports.getMaintenanceIncome = getMaintenanceIncome;
