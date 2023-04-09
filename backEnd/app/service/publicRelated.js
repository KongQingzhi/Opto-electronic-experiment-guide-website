const { Service } = require('egg');

class publicRelated extends Service {
  async selectAllClass() {
    const { app } = this;
    try {
      const res = await app.mysql.select('classes');
      return res;
    } catch (e) {
      console.log(e);
      return [];
    }
  }

  async updateQuestionsContent(param) {
    const { app } = this;
    if (JSON.stringify(param) === '{}') {
      return 0;
    }
    const { s_no, q_id } = param;
    try {
      const res = await app.mysql.update('qs', param, { where: { s_no, q_id } });
      return res.affectedRows;
    } catch (e) {
      console.log(e);
      return 0;
    }
  }

}

module.exports = publicRelated;
