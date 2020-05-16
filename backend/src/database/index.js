const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Account = require('../model/Account');
const AccountType = require('../model/AccountType');

const connection = new Sequelize(dbConfig);

Account.init(connection);
AccountType.init(connection);

module.exports = connection;