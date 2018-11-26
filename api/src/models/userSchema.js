const restful = require('node-restful');
const mongoose = restful.mongoose;

const schema = {
    email: String,
    username: String,
    password: String,
    birthdate: Date,
    name: String,
    lastName: String,
    role: ['admin', 'user', 'eventAdmin']
}

module.exports = mongoose.Schema(schema);