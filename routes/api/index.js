const express = require('express');

const router = express.Router();

router.use('/api/v1',require('./v1/login'));
router.use('/api/v1',require('./v1/register'));
router.use('/api/v1',require('./v1/report'));
router.use('/api/v1',require('./v1/authFailed'));

router.get('/',function(req,res){
    return res.send("<h1>Running!!!</h1>")
})

module.exports=router;