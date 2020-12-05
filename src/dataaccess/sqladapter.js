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

module.exports.sequelize = sequelize;
