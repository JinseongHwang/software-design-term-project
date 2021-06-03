const crypto = require('crypto');

const encrypt = (password) => {
  return crypto.createHash('sha512').update(password).digest('base64');
};

module.exports = {
  encrypt,
};
