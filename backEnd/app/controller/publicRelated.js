const Send = require('../utils/sendRequest');
// const groupByClass = require('../utils/groupByClass');
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

  async selectAllLesson() {
    const res = await this.sendRequest('GET', 'publicRelated', 'selectAllLesson');
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


  async selectAllRooms() {
    const res = await this.sendRequest('GET', 'publicRelated', 'selectAllRooms');
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

  async selectAllExperiments() {
    const res = await this.sendRequest('GET', 'publicRelated', 'selectAllExperiments');
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

  async selectAllQuestions() {
    const res = await this.sendRequest('GET', 'publicRelated', 'selectAllQuestions');
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
