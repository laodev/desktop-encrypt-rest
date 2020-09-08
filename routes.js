const router = require('express').Router();
const errors = require('./src/errors');
const encryptRouter = require('./src/encrypt/router');
const decryptRouter = require('./src/decrypt/router');
const loginRouter = require('./src/login/router')

// Front-end facing routes
router.use('/encrypt', encryptRouter);
router.use('/decrypt', decryptRouter);
router.use('/login', loginRouter);

// Error handling routes
router.use(errors.errorHandler);
router.use(errors.nullRoute);

module.exports = router;
