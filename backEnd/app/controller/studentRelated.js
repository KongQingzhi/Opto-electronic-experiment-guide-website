const Send = require('../utils/sendRequest');

class studentRelated extends Send {
  async getAllClass() {
    const res = await this.sendRequest('GET', 'studentRelated', 'getAllClass')
    this.ctx.body = res;
  }

  async bindClass() {
    const res = await this.sendRequest('POST', 'studentRelated', 'bindClass')
    this.ctx.body = res;
  }

  async getClassByStudent() {
    const res = await this.sendRequest('GET', 'studentRelated', 'getClassByStudent')
    this.ctx.body = res;
  }

  async getAllLessons() {
    const res = await this.sendRequest('GET', 'studentRelated', 'getAllLessons')
    this.ctx.body = res;
  }

}

module.exports = studentRelated;
