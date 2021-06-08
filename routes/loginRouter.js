const express = require('express');
const loginService = require('../service/loginService');
const Notification = require('../utils/Notification');
const {encrypt} = require('../utils/EncryptPassword');
const {validateStudentNumber, validatePasswordLength} = require('../utils/Validator');

const router = express.Router();

router.get('/login', async (req, res) => {
  res.render('../public/login.html');
});

router.post('/login', async (req, res) => {
  const result = await loginService.login(
    req.body.studentNumber,
    (await encrypt(req.body.password)).toString(),
  );
  if (result) {
    res.cookie('studentNumber', req.body.studentNumber);
    res.status(200).redirect('/sugang');
  } else {
    await Notification.memberInformationWrongNotice();
    res.redirect('/login');
  }
});

router.get('/join', async (req, res) => {
  res.render('../public/join.html');
});

router.post('/join', async (req, res) => {
  if (!validateStudentNumber(req.body.studentNumber)) {
    await Notification.studentNumberLengthNotice();
    await res.redirect('/join');
    return;
  }
  if (!validatePasswordLength(req.body.password)) {
    await Notification.passwordLengthNotice();
    await res.redirect('/join');
    return;
  }

  const result = await loginService.join(
    req.body.studentNumber,
    (await encrypt(req.body.password)).toString(),
  );

  if (result) {
    await Notification.memberJoinSuccessNotice(req.body.studentNumber);
    await res.status(200).redirect('/');
  } else {
    await Notification.memberDuplicateNotice();
    await res.redirect('/join');
  }
});

module.exports = router;
