const express = require('express');
const Notification = require('../utils/Notification');
const sugangService = require('../service/sugangService');
const {validateTimeForm, validateTimeRange, validateDuplicateTime} = require('../utils/Validator');

const router = express.Router();

router.get('/', async (req, res) => {
  res.render('../public/sugang.html');
});

router.get('/new', async (req, res) => {
  const subject = req.query.subject;
  const time = req.query.time;
  const studentNumber = req.cookies.studentNumber;

  const result = await sugangService.getContent(studentNumber)
    .then(value => value);

  const enrolledTimes = [];
  for (const res of result) {
    enrolledTimes.push(res.time);
  }

  if (!validateTimeForm(time)) {
    await Notification.timeFormNotice();
  } else if (!validateTimeRange(time)) {
    await Notification.timeRangeNotice();
  } else if (!validateDuplicateTime(time, enrolledTimes)) {
    await Notification.timeDuplicateNotice();
  } else {
    await sugangService.register(studentNumber, subject, time);
    await Notification.registerSuccessNotice();
  }
});

router.get('/content', async (req, res) => {
  res.render('../public/sugangTable.html');
});

router.post('/content', async (req, res) => {
  const studentNumber = req.cookies.studentNumber;
  const resultPromise = sugangService.getContent(studentNumber);
  resultPromise.then(value => res.send(value));
});

module.exports = router;
