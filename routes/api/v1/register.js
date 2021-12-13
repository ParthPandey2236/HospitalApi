const express = require('express');

const router = express.Router();

const passport = require('passport');

const Register = require('../../../controllers/api/v1/register');

router.post('/doctors/register',Register.doctor);

router.post('/patients/register', passport.authenticate('jwt', { session: false, failureRedirect: '/api/v1/authFailed' }),Register.patient);

module.exports = router;