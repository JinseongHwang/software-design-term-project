const sugangRepository = require('../repository/sugangRepository');

const register = async (studentNumber, subject, time) => {
  await sugangRepository.save(studentNumber, subject, time);
}

const getContent = async (studentNumber) => {
  return sugangRepository.findContentByStudentNumber(studentNumber);
}

module.exports = {
  register,
  getContent,
};