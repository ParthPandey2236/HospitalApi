const express = require('express');

const router = express.Router();

router.post('/doctors/login',require('../../../controllers/api/v1/login').login);

module.exports = router;