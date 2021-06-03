const memberRepository = require('../repository/memberRepository');

const join = (id, password) => {
  const newMember = {
    id: id,
    password: password,
  };
  if (memberRepository.validateDuplicateMember(newMember)) {
    memberRepository.save(newMember);
    return true; // 회원가입 성공
  }
  return false; // 회원가입 실패
};

const login = (id, password) => {
  return memberRepository.validateLoginRequest(id, password);
};

module.exports = {
  join,
  login,
};
