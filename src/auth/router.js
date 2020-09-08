const router = require('express').Router();
const auth = require('./index');

router.get('/', auth.doAuth);
module.exports = router;
