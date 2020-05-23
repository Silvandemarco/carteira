const express = require('express');
const AccountTypeController = require('./controllers/AccountTypeController');
const AccountController = require('./controllers/AccountController');

const routes = express.Router();

routes.get('/account_types', AccountTypeController.index);
routes.post('/account_types', AccountTypeController.store);

routes.get('/accounts', AccountController.index);
routes.get('/account_types/:account_type_id/accounts', AccountController.ListTypes);
routes.post('/accounts', AccountController.store);

module.exports = routes;