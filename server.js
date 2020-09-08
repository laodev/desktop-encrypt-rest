const express = require('express');
const app = express();
const routes = require('./routes');
const config = require('./config');

// Set up middleware
app.use(express.json());
app.use('/', routes);

app.listen(config.port);
logger.log('info', `Blowfish api running on port ${config.apiPort}`);


//module.exports = app; Will be used for testing later on
