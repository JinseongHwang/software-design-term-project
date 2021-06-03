const express = require('express');

const router = express.Router();

router.get('/sugang', (req, res) => {
  res.render('../public/sugang.html');
});

module.exports = router;
