const express = require('express');
const router = express.Router();

const UserRouter = require('./user');

module.exports = function (app) {
    app.use('/api', router);
    UserRouter.register(app);
}