const credentials = require('./credentials');

module.exports = {
    dbUrl: `mongodb://${credentials.username}:${credentials.userpass}@ds115446.mlab.com:15446/${credentials.dbname}`
}
