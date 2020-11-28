const express = require('express');

const maintenanceRouter = express.Router();

maintenanceRouter.route('/')
  .get((req, res) => {
    res.send('maintenance');
  });

maintenanceRouter.route('/maintenanceBills')
  .get((req, res) => {
    res.send('maintenanceBills');
  });

maintenanceRouter.route('/maintenanceIncome')
  .get((req, res) => {
    res.send('maintenanceIncome');
  });

module.exports = maintenanceRouter;
