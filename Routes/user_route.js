
const express = require('express');
const UserController  = require('../controller/User_Controll');  // Ensure this matches the path and export in User_Controll.js
const authorization = require('../middelwear/authorization');

const router = express.Router();

// Define route
router.get('/getuser', authorization, UserController);


module.exports = router;