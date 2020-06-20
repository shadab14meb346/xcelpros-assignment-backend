const express = require('express');
const { getAllRegisteredUsers } = require('../controllers/users');

const router = express.Router();

const { protect } = require('../middleware/auth');

router.get('/get-all-registered-users', protect, getAllRegisteredUsers);

module.exports = router;
