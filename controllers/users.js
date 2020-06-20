const asyncHandler = require('../middleware/async');
const User = require('../models/User');

// @desc      Get all registered users
// @route     POST /users/get-all-registered-users
// @access    Private
exports.getAllRegisteredUsers = asyncHandler(async (req, res, next) => {
  const users = await User.find({});

  res.status(200).json({
    success: true,
    data: users,
  });
});
