const express = require('express');
const app = express();
const routes = require('./routes');
const config = require('./config');

// Set up routes
app.use(express.json());
app.use('/', routes);

app.listen(config.port);
console.log(`Blowfish api running on port ${config.port}`);


//module.exports = app; Will be used for testing later on