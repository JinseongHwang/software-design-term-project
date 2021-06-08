const sugangRepository = require('../repository/sugangRepository');
const Notification = require('../utils/Notification');
const {validateTimeForm, validateTimeRange, validateDuplicateTime} = require('../utils/Validator');

const register = async (studentNumber, subject, time) => {
  const result = await getContent(studentNumber)
    .then(value => value);

  const enrolledTimes = [];
  for (const res of result) {
    enrolledTimes.push(res.time);
  }

  if (!validateTimeForm(time)) {
    await Notification.timeFormNotice();
    return false;
  } else if (!validateTimeRange(time)) {
    await Notification.timeRangeNotice();
    return false;
  } else if (!validateDuplicateTime(time, enrolledTimes)) {
    await Notification.timeDuplicateNotice();
    return false;
  }

  await sugangRepository.save(studentNumber, subject, time);
  return true;
}

const getContent = async (studentNumber) => {
  return await sugangRepository.findContentsByStudentNumber(studentNumber);
}

module.exports = {
  register,
  getContent,
};