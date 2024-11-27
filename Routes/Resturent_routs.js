const express = require('express');
const{ ResturentController , GetAllResturent }= require('../controller/Resturent_controller');
const authorization = require('../middelwear/authorization.js');


const router = express.Router();

// Resturent Rest api 

 
router.post('/',authorization, ResturentController )


// New Rout for Get all Resturent 
router.get('/getAll',GetAllResturent)

module.exports = router