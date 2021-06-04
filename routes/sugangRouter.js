const express = require('express');
const Notification = require('../utils/Notification');
const sugangService = require('../service/sugangService');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('../public/sugang.html');
});

router.get('/new', (req, res) => {
  const subject = req.query.subject;
  const time = req.query.time;
  const studentNumber = req.cookies.studentNumber;

  sugangService.register(studentNumber, subject, time);
  Notification.registerSuccessNotice();
});

module.exports = router;
