const sugangRepository = require('../repository/sugangRepository');

const register = async (studentNumber, subject, time) => {
  await sugangRepository.save(studentNumber, subject, time);
}

const getContent = async (studentNumber) => {
  return await sugangRepository.findContentsByStudentNumber(studentNumber);
}

module.exports = {
  register,
  getContent,
};