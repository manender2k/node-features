const { Router } = require('express');
const allroutes = require('./allroutes.route');
const config = require('../config/config');

const routes = Router();
const apiversion = config.APIVERSION;

routes.use(apiversion, allroutes);

module.exports = routes;