const memberRepository = [];

const save = (member) => {
  const newMember = {
    id: member.id,
    password: member.password,
  };
  memberRepository.push(newMember);
};

const validateDuplicateMember = (member) => {
  const findMember = memberRepository.find(
    (existMember) => existMember.id === member.id,
  );
  if (findMember) {
    return false;
  }
  return true;
};

const validateLoginRequest = (id, password) => {
  const findMember = memberRepository.find((existMember) => {
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
