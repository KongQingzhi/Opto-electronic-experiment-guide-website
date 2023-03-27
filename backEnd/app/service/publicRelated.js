const { Service } = require('egg');

class publicRelated extends Service {
  async updateUserInfo(param) {
    const { app } = this;
    const { s_no } = param;
    try {
      await app.mysql.update('students', param, { where: { s_no } });
      return [ param ];
    } catch (e) {
      console.log(e);
      return [];
    }
  }
}

module.exports = publicRelated;
