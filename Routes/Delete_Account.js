const express = require('express');

const { DeleteAccount } = require('../controller/Delet_account');

const router = express.Router();

router.delete('/',DeleteAccount)


module.exports = router