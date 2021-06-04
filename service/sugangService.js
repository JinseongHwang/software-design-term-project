const sugangRepository = require('../repository/sugangRepository');

const register = (studentNumber, subject, time) => {
  sugangRepository.save(studentNumber, subject, time);
}

module.exports = {
  register,
};