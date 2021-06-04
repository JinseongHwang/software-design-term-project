const sugangRepository = [];

const save = async (studentNumber, subject, time) => {
  if (!sugangRepository[studentNumber]) {
    sugangRepository[studentNumber] = [{
      subject: subject,
      time: time,
    }];
  } else {
    await sugangRepository[studentNumber].push({
      subject: subject,
      time: time,
    });
  }
}

const findContentByStudentNumber = async (studentNumber) => {
  return sugangRepository[studentNumber];
}

module.exports = {
  save,
  findContentByStudentNumber,
};