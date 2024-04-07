const routes = require('express').Router();
const eventRoutes = require('./event.routes');

routes.use('/events', eventRoutes);

module.exports = routes;