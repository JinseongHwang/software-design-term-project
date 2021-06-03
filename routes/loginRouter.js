const express = require('express');
const alert = require('alert');
const loginService = require('../service/loginService');
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
    alert('ID / PW를 다시 확인해주세요.');
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
    alert(`${req.body.studentNumber}님 회원 가입을 축하합니다!`);
    res.status(200).redirect('/sugang');
  } else {
    alert('이미 존재하는 회원입니다.');
    res.redirect('/join');
  }
});

module.exports = router;
