const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Account = require('../model/Account');
const AccountType = require('../model/AccountType');
const Categorie = require('../model/Categorie');
const Transaction = require('../model/Transaction');

const connection = new Sequelize(dbConfig);

AccountType.init(connection);
Account.init(connection);
Categorie.init(connection);
Transaction.init(connection);

Account.associate(connection.models);
AccountType.associate(connection.models);
Categorie.associate(connection.models);
Transaction.associate(connection.models);

module.exports = connection;