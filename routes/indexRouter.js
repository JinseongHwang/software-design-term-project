const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  res.render('../public/index.html');
});

module.exports = router;
