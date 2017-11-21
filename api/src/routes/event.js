const restful = require('node-restful');
const mongooseSchema = require('../models/eventSchema');

class EventRouter {
    constructor(app) {
        this.resource = app.resource = restful.model('event', mongooseSchema).methods(['get', 'post', 'put', 'delete']);
        this.resource.register(app, '/api/event');
    }

    static register(app) {
        return new EventRouter(app);
    }
}

module.exports = EventRouter;