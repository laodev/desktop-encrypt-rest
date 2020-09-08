const router = require('express').Router();
const encrypt = require('./index');

router.get('/', encrypt.doEncrypt);
module.exports = router;