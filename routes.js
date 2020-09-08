const router = require('express').Router();
const errors = require('./src/errors');
const encryptRouter = require('./src/encrypt/router');
const decryptRouter = require('./src/decrypt/router');
const authRouter = require('./src/auth/router')

// Front-end facing routes
router.use('/encrypt', encryptRouter);
router.use('/decrypt', decryptRouter);
router.use('/auth', authRouter);

// Error handling routes
// router.use(errors.errorHandler);
// router.use(errors.nullRoute);

module.exports = router;
