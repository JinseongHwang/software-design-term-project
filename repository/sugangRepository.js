const {Enrol, sequelize} = require('../models');
const {findMemberByStudentNumber} = require('./memberRepository');

const save = async (studentNumber, subject, time) => {
  const memberPk = await findMemberByStudentNumber(studentNumber)
    .then((res) => res.id);
  await Enrol.create({
    subject: subject,
    time: time,
    enrol_student: memberPk,
  });
  // await sequelize.query(
  //   `INSERT INTO term_project.Enrols (subject, time, createdAt, updatedAt, enrol_student) VALUES ('${subject}', '${time}', now(), now(), '${memberPk}');`
  // );
}

const findContentsByStudentNumber = async (studentNumber) => {
  const memberPk = await findMemberByStudentNumber(studentNumber)
    .then((res) => res.id);
  return await Enrol.findAll({
    where: {
      enrol_student: memberPk,
    }
  });
}

module.exports = {
  save,
  findContentsByStudentNumber,
};
