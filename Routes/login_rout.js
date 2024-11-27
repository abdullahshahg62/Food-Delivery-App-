const express = require('express');
const { loginForm } = require('../controller/user_login');

const router = express.Router();

router.post('/',loginForm)


module.exports = router