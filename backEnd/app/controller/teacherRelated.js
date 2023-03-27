const Send = require('../utils/sendRequest');
class teacherRelated extends Send {
  async lessonExists() {
    const res = await this.sendRequest('POST', 'teacherRelated', 'lessonExists');
    let json = null;
    if (res.length) {
      json = {
        status: 1,
        msg: '课程已存在！',
        data: res,
      };
    } else {
      json = {
        status: 0,
        msg: '课程不存在',
        data: [],
      };
    }
    this.ctx.body = json;
    return json;
  }
  async addLessons() {
    const flag = await this.lessonExists();
    let json = null;
    if (flag.status) {
      json = {
        status: 0,
        msg: '添加失败,课程已存在！',
        data: [],
      };
    } else {
      const res = await this.sendRequest('POST', 'teacherRelated', 'addLessons');
      if (res) {
        json = {
          status: 1,
          msg: '添加成功！',
          data: [],
        };
      } else {
        json = {
          status: 0,
          msg: '添加失败',
          data: [],
        };
      }
    }
    this.ctx.body = json;
  }

  async experimentExists() {
    const res = await this.sendRequest('POST', 'teacherRelated', 'experimentExists');
    let json = null;
    if (res.length) {
      json = {
        status: 1,
        msg: '实验已存在！',
        data: res,
      };
    } else {
      json = {
        status: 0,
        msg: '实验不存在',
        data: [],
      };
    }
    this.ctx.body = json;
    return json;
  }

  async publishExperiment() {
    const flag = await this.experimentExists();
    let json = null;
    if (flag.status) {
      json = {
        status: 0,
        msg: '添加失败,实验已存在！',
        data: [],
      };
    } else {
      const res = await this.sendRequest('POST', 'teacherRelated', 'publishExperiment');
      if (res) {
        json = {
          status: 1,
          msg: '添加成功！',
          data: [],
        };
      } else {
        json = {
          status: 0,
          msg: '添加失败',
          data: [],
        };
      }
    }
    this.ctx.body = json;
  }

  async selectELBind() {
    const res = await this.sendRequest('POST', 'teacherRelated', 'selectELBind');
    let json = null;
    if (res.length) {
      json = {
        status: 1,
        msg: '实验与课程已绑定！',
        data: res,
      };
    } else {
      json = {
        status: 0,
        msg: '实验与课程未绑定！',
        data: [],
      };
    }
    this.ctx.body = json;
    return json;
  }

  async bindExperimentLessons() {
    const flag = await this.selectELBind();
    let json = null;
    if (flag.status) {
      json = {
        status: 0,
        msg: '课程与实验已绑定，请勿重复操作！',
        data: [],
      };
    } else {
      const res = await this.sendRequest('POST', 'teacherRelated', 'bindExperimentLessons');
      if (res) {
        json = {
          status: 1,
          msg: '绑定成功！',
          data: [],
        };
      } else {
        json = {
          status: 0,
          msg: '绑定失败',
          data: [],
        };
      }
    }
    this.ctx.body = json;
  }

  async selectClass() {
    const res = await this.sendRequest('POST', 'teacherRelated', 'selectClass');
    let json = null;
    if (res.length) {
      json = {
        status: 1,
        msg: '班级已存在',
        data: res,
      };
    } else {
      json = {
        status: 0,
        msg: '班级不存在',
        data: [],
      };
    }
    this.ctx.body = json;
    return json;
  }

  async createClass() {
    const flag = await this.selectClass();
    let json = null;
    if (flag.status) {
      json = {
        status: 0,
        msg: '班级已存在，请勿重复添加！',
        data: [],
      };
    } else {
      const res = await this.sendRequest('POST', 'teacherRelated', 'createClass');
      if (res) {
        json = {
          status: 1,
          msg: '添加成功！',
          data: [],
        };
      } else {
        json = {
          status: 0,
          msg: '添加失败',
          data: [],
        };
      }
    }
    this.ctx.body = json;
  }
  async deleteClass() {
    const res = await this.sendRequest('POST', 'teacherRelated', 'deleteClass');
    let json = null;
    if (res) {
      json = {
        status: 1,
        msg: '删除成功！',
        data: res,
      };
    } else {
      json = {
        status: 0,
        msg: '删除失败',
        data: [],
      };
    }
    this.ctx.body = json;
    return json;
  }
}

module.exports = teacherRelated;
