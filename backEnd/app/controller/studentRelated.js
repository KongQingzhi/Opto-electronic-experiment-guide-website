const Send = require('../utils/sendRequest');

class studentRelated extends Send {
  async selectUserInfo() {
    let json = null;
    const res = await this.sendRequest('GET', 'studentRelated', 'selectUserInfo');
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

  async updateUserInfo() {
    const res = await this.sendRequest('POST', 'studentRelated', 'updateUserInfo');
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

  async bindClass() {
    let json = null;
    const res = await this.sendRequest('POST', 'studentRelated', 'bindClass');
    if (res) {
      json = {
        status: 1,
        msg: '绑定成功！',
        data: [],
      };
    } else {
      json = {
        status: 0,
        msg: '绑定失败！',
        data: [],
      };
    }
    this.ctx.body = json;
  }

  async selectExperiments() {
    const res = await this.sendRequest('GET', 'studentRelated', 'selectExperiments');
    let json = null;
    if (res) {
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

  async experimentsContent() {
    const res = await this.sendRequest('GET', 'studentRelated', 'experimentsContent');
    let json = null;
    if (res) {
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

  async selectQuestions() {
    const res = await this.sendRequest('GET', 'studentRelated', 'selectQuestions');
    let json = null;
    if (res) {
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

  async questionsContent() {
    const res = await this.sendRequest('GET', 'studentRelated', 'questionsContent');
    let json = null;
    if (res) {
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

  async selectExperimentsScore() {
    const res = await this.sendRequest('GET', 'studentRelated', 'selectExperimentsScore');
    let json = null;
    if (res) {
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

  async selectLessonsScore() {
    const res = await this.sendRequest('GET', 'studentRelated', 'selectLessonsScore');
    let json = null;
    if (res) {
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

  async getClassByStudent() {
    const res = await this.sendRequest('GET', 'studentRelated', 'getClassByStudent');
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

  async selectBindClass() {
    const res = await this.sendRequest('POST', 'studentRelated', 'selectBindClass');
    let json = null;
    if (res.length) {
      json = {
        status: 1,
        msg: '已绑定！',
        data: res,
      };
    } else {
      json = {
        status: 0,
        msg: '未绑定',
        data: [],
      };
    }
    this.ctx.body = json;
    return json;
  }

  async getAllLessons() {
    const res = await this.sendRequest('GET', 'studentRelated', 'getAllLessons');
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

module.exports = studentRelated;
