const Send = require('../utils/sendRequest');

class publicRelated extends Send {
  async selectUserInfo() {
    let json = null;
    const res = await this.sendRequest('GET', 'publicRelated', 'selectUserInfo');
    if (res) {
      json = {
        status: 1,
        msg: '查询成功！',
        data: res,
      };
    } else {
      json = {
        status: 0,
        msg: '查询失败！',
        data: [],
      };
    }
    this.ctx.body = json;
  }

  async updateQuestionsContent() {
    const res = await this.sendRequest('POST', 'publicRelated', 'updateQuestionsContent');
    let json = null;
    if (res) {
      json = {
        status: 1,
        msg: '更新成功！',
        data: res,
      };
    } else {
      json = {
        status: 0,
        msg: '更新失败',
        data: [],
      };
    }
    this.ctx.body = json;
  }

  async selectAllClass() {
    const res = await this.sendRequest('GET', 'publicRelated', 'selectAllClass');
    let json = null;
    if (res.length) {
      json = {
        status: 1,
        msg: '查询成功！',
        data: res,
      };
    } else {
      json = {
        status: 0,
        msg: '查询失败',
        data: [],
      };
    }
    this.ctx.body = json;
  }
}

module.exports = publicRelated;
