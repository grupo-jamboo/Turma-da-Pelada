const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const restful = require('node-restful');
const compression = require('compression');
const mongoose = restful.mongoose;

const config = require('./config');
const app = express();

const port = process.env.port || 3000;

if (app.get('env') !== 'production') {
    const morgan = require('morgan');
    app.use(morgan('dev'));
}

app.use(helmet());
app.use(compression());
app.use(bodyParser.urlencoded({'extended': true}));
app.use(bodyParser.json());

// Routes
require('./src/routes')(app);

// handle 404 requests
app.use((req, res) => {
    res.status(404).send('Not found :(');
});

var promise = mongoose.connect(config.dbUrl, {useMongoClient: true});    
promise.then((db) => {
    console.log("Mongo - connected to: ", db.db.s.databaseName);
});

app.listen(port, () => {
    console.log('We are listening on port ' + port);
});
