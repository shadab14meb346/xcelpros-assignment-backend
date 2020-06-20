const express = require('express');
const { test } = require('../controllers/auth');

const router = express.Router();

const { protect } = require('../middleware/auth');

router.get('/test', test);
module.exports = router;
