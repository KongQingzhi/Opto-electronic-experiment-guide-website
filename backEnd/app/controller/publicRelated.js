const Send = require('../utils/sendRequest');

class publicRelated extends Send {
  async updateUserInfo() {
    const res = await this.sendRequest('POST', 'publicRelated', 'updateUserInfo');
    let json = null;
    if (res.length) {
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
}

module.exports = publicRelated;
