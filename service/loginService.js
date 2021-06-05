const memberRepository = require('../repository/memberRepository');

const join = async (id, password) => {
  const findMember = await memberRepository.findMemberByStudentNumber(id);
  if (!findMember) {
    await memberRepository.save(id, password);
    return true; // 회원가입 성공
  }
  return false; // 회원가입 실패
};

const login = async (id, password) => {
  return await memberRepository.findMemberByStudentNumberAndPassword(id, password);
};

module.exports = {
  join,
  login,
};
