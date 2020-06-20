const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const User = require('../models/User');

exports.test = asyncHandler(async (req, res, next) => {
  res.send('test');
});
