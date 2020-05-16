const express = require('express');
const AccountTypeController = require('./controllers/AccountTypeController');
const AccountController = require('./controllers/AccountController');

const routes = express.Router();

routes.post('/account_type', AccountTypeController.store);
routes.post('/account', AccountController.store);

module.exports = routes;