const restful = require('node-restful');
const mongoose = restful.mongoose;

const schema = {
    username: String,
    password: String
}

module.exports = mongoose.Schema(schema);