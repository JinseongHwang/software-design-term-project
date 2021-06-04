const memberRepository = require('../repository/memberRepository');

const join = async (id, password) => {
  const newMember = {
    id: id,
    password: password,
  };
  if (await memberRepository.validateDuplicateMember(newMember)) {
    await memberRepository.save(newMember);
    return true; // 회원가입 성공
  }
  return false; // 회원가입 실패
};

const login = async (id, password) => {
  return await memberRepository.validateLoginRequest(id, password);
};

module.exports = {
  join,
  login,
};
