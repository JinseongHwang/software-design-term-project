// const {Member} = require('../models/member');

const memberRepository = [];

const save = async (id, password) => {
  const newMember = {
    id: id,
    password: password,
  };
  await memberRepository.push(newMember);
};

const validateDuplicateMember = async (memberId) => {
  const findMember = await memberRepository.find(
    (existMember) => existMember.id === memberId,
  );
  if (findMember) {
    return false;
  }
  return true;
};

const validateLoginRequest = async (id, password) => {
  const findMember = await memberRepository.find((existMember) => {
    if (existMember.id === id && existMember.password === password) return true;
  });
  if (findMember) {
    return true;
  }
  return false;
};

module.exports = {
  save,
  validateDuplicateMember,
  validateLoginRequest,
};
