const memberRepository = [];

const save = async (member) => {
  const newMember = {
    id: member.id,
    password: member.password,
  };
  await memberRepository.push(newMember);
};

const validateDuplicateMember = async (member) => {
  const findMember = await memberRepository.find(
    (existMember) => existMember.id === member.id,
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
