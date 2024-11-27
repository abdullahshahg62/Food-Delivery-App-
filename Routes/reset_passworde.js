const express = require('express');
const { resetpassword } = require('../controller/resetPasw_controller');
const authorization = require('../middelwear/authorization.js');
const router = express.Router();
// Rest passworde 
// Rest api 
router.post('/',authorization,resetpassword)


module.exports = router