const express = require('express');
const loginService = require('../service/loginService');
const Notification = require('../utils/Notification');
const { encrypt } = require('../utils/EncryptPassword');

const router = express.Router();

router.get('/login', async (req, res) => {
  res.render('../public/login.html');
});

router.post('/login', async (req, res) => {
  const result = loginService.login(
    req.body.studentNumber,
    encrypt(req.body.password.toString()),
  );
  if (result) {
    res.status(200).redirect('/sugang');
  } else {
    Notification.memberInformationWrongNotice();
    res.redirect('/login');
  }
});

router.get('/join', async (req, res) => {
  res.render('../public/join.html');
});

router.post('/join', async (req, res) => {
  const result = loginService.join(
    req.body.studentNumber,
    encrypt(req.body.password.toString()),
  );
  if (result) {
    Notification.memberJoinSuccessNotice(req.body.studentNumber);
    res.status(200).redirect('/sugang');
  } else {
    Notification.memberDuplicateNotice();
    res.redirect('/join');
  }
});

module.exports = router;
