const express = require('express');
const catchAsync = require('../../utils/catchAsync');

const router = express.Router();

router.route('/').get(
  catchAsync(async (req, res) => {
    res.redirect('/v1/docs');
  })
);

module.exports = router;
