const alert = require('alert');

const memberInformationWrongNotice = () => {
  alert('ID / PW를 다시 확인해주세요.');
}

const memberJoinSuccessNotice = (memberId) => {
  alert(`${memberId}님 회원 가입을 축하합니다!`);
}

const memberDuplicateNotice = () => {
  alert('이미 존재하는 회원입니다.');
}

module.exports = {
  memberInformationWrongNotice,
  memberJoinSuccessNotice,
  memberDuplicateNotice,
};