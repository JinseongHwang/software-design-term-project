const alert = require('alert');

const memberInformationWrongNotice = async () => {
  await alert('ID / PW를 다시 확인해주세요.');
}

const memberJoinSuccessNotice = async (memberId) => {
  await alert(`${memberId}님 회원 가입을 축하합니다!`);
}

const memberDuplicateNotice = async () => {
  await alert('이미 존재하는 회원입니다.');
}

const registerSuccessNotice = async () => {
  await alert('과목 등록에 성공했습니다.');
}

const timeDuplicateNotice = async () => {
  await alert('겹치는 시간이 존재합니다. 확인해주세요.');
}

const timeRangeNotice = async () => {
  await alert('시간은 00:00 부터 23:59 까지 허용됩니다.');
}

const timeFormNotice = async () => {
  await alert('시간은 "HH:MM~HH:MM" 형태로 작성해주세요.');
}

const passwordLengthNotice = async () => {
  await alert('비밀번호는 8자리 이상 작성해주세요.');
}

const studentNumberLengthNotice = async () => {
  await alert('학번은 정수 7자리로 구성되야 합니다.');
}

module.exports = {
  memberInformationWrongNotice,
  memberJoinSuccessNotice,
  memberDuplicateNotice,
  registerSuccessNotice,
  timeDuplicateNotice,
  timeRangeNotice,
  timeFormNotice,
  passwordLengthNotice,
  studentNumberLengthNotice,
};