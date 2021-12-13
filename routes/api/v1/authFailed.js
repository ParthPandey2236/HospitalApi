const express = require('express');

const router = express.Router();

router.get('/authFailed',require('../../../controllers/api/v1/authFailed').authFailed);

module.exports = router;