const express = require('express');

const passport = require('passport');

const router = express.Router();

const Reports = require('../../../controllers/api/v1/report');

router.post('/patients/:id/create_report',passport.authenticate('jwt',{session : false,failureRedirect : '/api/v1/authFailed'}),Reports.createReport);
//route to create report of a patient

router.get('/patients/:id/all_reports', passport.authenticate('jwt', { session: false, failureRedirect: '/api/v1/authFailed'}),Reports.allReports);
//route to get all reports of a patient

router.get('/reports/:status', passport.authenticate('jwt', { session: false, failureRedirect: '/api/v1/authFailed'}), Reports.statusVise);
//route to get all reports of a specific status

module.exports = router;