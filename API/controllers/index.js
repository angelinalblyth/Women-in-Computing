const express = require('express');
const router = express.Router();

router.use('/timeline', require('./timeline.js'));

router.get('/', function (req, res) {
  res.json({"data": "Timeine API"});
});

module.exports = router;
