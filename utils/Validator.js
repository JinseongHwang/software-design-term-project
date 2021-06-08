const MIN_PASSWORD_LENGTH = 8;

const validateStudentNumber = (studentNumber) => {
  const regex = new RegExp('^[0-9]{7}$');
  return regex.test(studentNumber);
}

const validatePasswordLength = (password) => {
  return password.length >= MIN_PASSWORD_LENGTH;
}

// 시간 관련 함수

const getSplitTime = (formalTime) => {
  const splitTime = formalTime.split('~');
  const startTime = splitTime[0].split(':');
  const endTime = splitTime[1].split(':');

  return {
    startHour: Number(startTime[0]),
    startMinute: Number(startTime[1]),
    endHour: Number(endTime[0]),
    endMinute: Number(endTime[1])
  };
}

const toMinutes = (hour, minute) => {
  return hour * 60 + minute;
}

const validateTimeForm = (time) => {
  const regex = new RegExp('^[0-9]{2}:[0-9]{2}~[0-9]{2}:[0-9]{2}$');
  return regex.test(time);
}

/**
 * 00:00~23:59 -> True
 */
const validateTimeRange = (formalTime) => {
  const splitTime = getSplitTime(formalTime);

  return (0 <= splitTime.startHour && splitTime.startHour <= 23) && // 시작 시
    (0 <= splitTime.endHour && splitTime.endHour <= 23) && // 종료 시
    (0 <= splitTime.startMinute && splitTime.startMinute <= 59) && // 시작 분
    (0 <= splitTime.endMinute && splitTime.endMinute <= 59) && // 종료 분
    ((splitTime.startHour < splitTime.endHour) ||
      (splitTime.startHour === splitTime.endHour && splitTime.startMinute <= splitTime.endMinute));
}

const validateDuplicateTime = (formalTime, enrolledTimeList) => {
  const splitTime = getSplitTime(formalTime);
  const start = toMinutes(splitTime.startHour, splitTime.startMinute),
    end = toMinutes(splitTime.endHour, splitTime.endMinute);

  for (const enrolledTime of enrolledTimeList) {
    const splitEnrolledTime = getSplitTime(enrolledTime);
    const enrolledStart = toMinutes(splitEnrolledTime.startHour, splitEnrolledTime.startMinute),
      enrolledEnd = toMinutes(splitEnrolledTime.endHour, splitEnrolledTime.endMinute);

    if (enrolledStart <= start && start <= enrolledEnd) return false;
    if (enrolledStart <= end && end <= enrolledEnd) return false;
    if (start < enrolledStart && enrolledEnd < end) return false;
  }
  return true;
}

module.exports = {
  validateDuplicateTime,
  validateTimeRange,
  validateTimeForm,
  validatePasswordLength,
  validateStudentNumber,
};