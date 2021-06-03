const express = require('express');

const router = express.Router();

router.get('/sugang', (req, res) => {
  res.render('../view/sugang.html');
});

module.exports = router;
