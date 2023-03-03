const Send = require('../utils/sendRequest');

class studentRelated extends Send {
  async getAllClass() {
    const res = await this.sendRequest('GET', 'studentRelated', 'getAllClass')
    this.ctx.body = res;
  }

  async getClassByStudent() {
    const res = await this.sendRequest('GET', 'studentRelated', 'getClassByStudent')
    this.ctx.body = res;
  }

  async selectBindClass() {
    const res = await this.sendRequest('POST', 'studentRelated', 'selectBindClass')
    this.ctx.body = res;
    return res;
  }

  async bindClass() {
    const flag = await this.selectBindClass();
    if (!flag) {
      const res = await this.sendRequest('POST', 'studentRelated', 'bindClass')
      this.ctx.body = res;
    } else {
      this.ctx.body = '已绑定班级，请勿重复绑定！'
    }
  }

  async getAllLessons() {
    const res = await this.sendRequest('GET', 'studentRelated', 'getAllLessons')
    this.ctx.body = res;
  }

}

module.exports = studentRelated;
