const express = require('express');

const app = express();
const debug = require('debug')('app');
const morgan = require('morgan');
// const sequelize = require('./src/dataaccess/sqladapter');
const port = process.env.PORT || 3000;
const societyId = 123;
const maintenanceRouter = require('./src/routes/maintenanceRoutes')(societyId);

app.use(morgan('combined'));

app.use('/maintenance', maintenanceRouter);

app.get('/', (req, res) => {
  debug('response');
  res.send('hello from My society');
});

app.listen(port, () => {
  debug(`listen on port ${port}`);
});
