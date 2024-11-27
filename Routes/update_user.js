const express = require('express');
const  UpdateUsercontroller = require('../controller/update_controller.js');  // Ensure this matches the path and export in User_Controll.js
const authorization = require('../middelwear/authorization.js');

const router = express.Router();

// Define route
// router.get('/getuser', authorization, UserController);
router.put('/', authorization , UpdateUsercontroller)

module.exports = router;