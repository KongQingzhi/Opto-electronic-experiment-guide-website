const { Service } = require('egg');

class publicRelated extends Service {
  async selectUserInfo(param) {
    const { app } = this;
    if (JSON.stringify(param) === '{}') {
      return 0;
    }
    const { UserNo, Role } = param;
    let table = '';
    let query = null;
    if (Role === 'true') {
      table = 'teachers';
      query = {
        t_no: UserNo,
      };
    } else {
      table = 'students';
      query = {
        s_no: UserNo,
      };
    }
    try {
      const res = await app.mysql.select(table, { where: query });
      if (res.length) {
        return res;
      }
      return 0;
    } catch (e) {
      console.log(e);
      return 0;
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
}

module.exports = publicRelated;
