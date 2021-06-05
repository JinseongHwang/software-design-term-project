const {Member} = require('../models');

const save = async (id, password) => {
  await Member.create({
    studentNumber: id,
    password: password,
  });
}

const findMemberByStudentNumber = async (studentNumber) => {
  return await Member.findOne({
    where: {
      studentNumber: studentNumber,
    }
  });
}

const findMemberByStudentNumberAndPassword = async (studentNumber, password) => {
  return await Member.findOne({
    where: {
      studentNumber: studentNumber,
      password: password,
    }
  });
}

module.exports = {
  save,
  findMemberByStudentNumber,
  findMemberByStudentNumberAndPassword,
};
