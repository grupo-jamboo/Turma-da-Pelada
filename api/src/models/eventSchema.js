const restful = require('node-restful');

const mongoose = restful.mongoose;
const ObjectId = mongoose.Schema.Types.ObjectId;

const schema = {
    title: {
        type: String
    },
    date: {
        type: Date
    },
    local: {
        type: String
    },
    totalValue: {
        type: Number
    },
    invited: [{
        type: ObjectId
    }]
}

module.exports = mongoose.Schema(schema);