const express = require('express');
const { processReferral } = require('../controllers/referralController');
const router = express.Router();

router.post('/referral', processReferral);

module.exports = router;
