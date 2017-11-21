const express = require('express');
const router = express.Router();

const UserRouter = require('./user');
const EventRouter = require('./event');

module.exports = function (app) {
    app.use('/api', router);
    UserRouter.register(app);
    EventRouter.register(app);
}