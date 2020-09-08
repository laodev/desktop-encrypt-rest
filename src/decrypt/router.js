const router = require('express').Router();
const decrypt = require('./index');

router.get('/', decrypt.doDecrypt);
module.exports = router;
