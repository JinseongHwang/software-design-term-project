const sugangRepository = [];

const save = (studentNumber, subject, time) => {
  if (!sugangRepository[studentNumber]) {
    sugangRepository[studentNumber] = [{
      subject: subject,
      time: time,
    }];
  } else {
    sugangRepository[studentNumber].push({
      subject: subject,
      time: time,
    });
  }
}

module.exports = {
  save,
};