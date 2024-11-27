const express = require('express');
const { Register } = require('../controller/auth_controler');

const router = express.Router();

// Register rout 
// post 
 
router.post('/',Register)


module.exports = router