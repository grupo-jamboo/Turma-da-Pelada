const restful = require('node-restful');
const mongooseSchema = require('../models/userSchema');

class UserRouter {
    constructor(app) {
        this.resource = app.resource = restful.model('user', mongooseSchema).methods(['get', 'post', 'put', 'delete']);
        this.resource.register(app, '/api/users');
    }

    static register(app) {
        return new UserRouter(app);
    }
}

module.exports = UserRouter;