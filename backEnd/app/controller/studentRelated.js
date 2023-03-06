const Send = require('../utils/sendRequest');

class studentRelated extends Send {
  async getAllClass() {
    const res = await this.sendRequest('GET', 'studentRelated', 'getAllClass')
    let json = null;
    if (res.length) {
      json = {
        "status": 1,
        "msg": "查询成功！",
        "data": res
      }
    } else {
      json = {
        "status": 0,
        "msg": "查询失败",
        "data": [],
      }
    }
    this.ctx.body = json;
  }

  async getClassByStudent() {
    const res = await this.sendRequest('GET', 'studentRelated', 'getClassByStudent')
    let json = null;
    if (res.length) {
      json = {
        "status": 1,
        "msg": "查询成功！",
        "data": res
      }
    } else {
      json = {
        "status": 0,
        "msg": "查询失败",
        "data": [],
      }
    }
    this.ctx.body = json;
  }

  async selectBindClass() {
    const res = await this.sendRequest('POST', 'studentRelated', 'selectBindClass')
    let json = null;
    if (res.length) {
      json = {
        "status": 1,
        "msg": "已绑定！",
        "data": res
      }
    } else {
      json = {
        "status": 0,
        "msg": "未绑定",
        "data": [],
      }
    }
    this.ctx.body = json;
    return json;
  }

  async bindClass() {
    const flag = await this.selectBindClass();
    let json = null;
    console.log(flag.status);
    if (flag.status) {
      json = {
        "status": 0,
        "msg": "已绑定班级，请勿重复绑定",
        "data": [],
      }
    } else {
      const res = await this.sendRequest('POST', 'studentRelated', 'bindClass')
      if (res) {
        json = {
          "status": 1,
          "msg": "绑定成功！",
          "data": [],
        }
      } else {
        json = {
          "status": 0,
          "msg": "绑定失败！",
          "data": [],
        }
      }
    }
    this.ctx.body = json;
  }

  async getAllLessons() {
    const res = await this.sendRequest('GET', 'studentRelated', 'getAllLessons')
    let json = null;
    if (res.length) {
      json = {
        "status": 1,
        "msg": "查询成功！",
        "data": res
      }
    } else {
      json = {
        "status": 0,
        "msg": "查询失败",
        "data": [],
      }
    }
    this.ctx.body = json;
  }

}

module.exports = studentRelated;
