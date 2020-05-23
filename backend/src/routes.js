const express = require('express');
const AccountTypeController = require('./controllers/AccountTypeController');
const AccountController = require('./controllers/AccountController');
const CategoriesController = require('./controllers/CategorieController');
const TransactionsController = require('./controllers/TransactionController');

const routes = express.Router();

routes.get('/account_types', AccountTypeController.index);
routes.post('/account_types', AccountTypeController.store);

routes.get('/accounts', AccountController.index);
routes.get('/account_types/:account_type_id/accounts', AccountController.ListTypes);
routes.post('/accounts', AccountController.store);

routes.get('/categories', CategoriesController.index);
routes.post('/categories', CategoriesController.store);

routes.get('/transactions', TransactionsController.index);
routes.post('/transactions', TransactionsController.store);

module.exports = routes;