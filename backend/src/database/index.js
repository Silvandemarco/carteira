const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Account = require('../model/Account');
const AccountType = require('../model/AccountType');

const connection = new Sequelize(dbConfig);

AccountType.init(connection);
Account.init(connection);

Account.associate(connection.models);
AccountType.associate(connection.models);

module.exports = connection;