const express = require('express');
// const debug = require('debug')('app');
const sqladapter = require('../dataaccess/sqladapter');

const maintenanceRouter = express.Router();

function router(societyId) {
  maintenanceRouter.route('/')
    .get((req, res) => {
      res.send(`maintenance of society ${societyId}`);
    });

  maintenanceRouter.route('/maintenanceBills')
    .get((req, res) => {
      res.send('maintenanceBills');
    });

  maintenanceRouter.route('/maintenanceIncome')
    .get((req, res) => {
      sqladapter.getMaintenanceIncome()
        .then((mi) => {
          const maintenanceIncome = mi;
          res.send(maintenanceIncome);
        })
        .catch((error) => error);
    });

  return maintenanceRouter;
}

module.exports = router;
