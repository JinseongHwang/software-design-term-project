const memberRepository = require('../repository/memberRepository');
const Notification = require('../utils/Notification');
const {validateStudentNumber, validatePasswordLength} = require('../utils/Validator');

const join = async (id, password, passwordLength) => {
  if (!validateStudentNumber(id)) {
    await Notification.studentNumberLengthNotice();
    return false;
  }
  if (!validatePasswordLength(passwordLength)) {
    await Notification.passwordLengthNotice();
    return false;
  }

  const findMember = await memberRepository.findMemberByStudentNumber(id);
  if (!findMember) {
    await memberRepository.save(id, password);
    return true; // 회원가입 성공
  }
  await Notification.memberDuplicateNotice();
  return false; // 회원가입 실패
};

const login = async (id, password) => {
  return await memberRepository.findMemberByStudentNumberAndPassword(id, password);
};

module.exports = {
  join,
  login,
};
