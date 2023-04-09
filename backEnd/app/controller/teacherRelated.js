const Send = require('../utils/sendRequest');
class teacherRelated extends Send {
  async selectClassExists() {
    const res = await this.sendRequest('POST', 'teacherRelated', 'selectClassExists');
    let json = null;
    if (res) {
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
    const flag = await this.selectClassExists();
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
  }
  async selectLessonExists() {
    const res = await this.sendRequest('POST', 'teacherRelated', 'selectLessonExists');
    let json = null;
    if (res) {
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
  async createLesson() {
    const flag = await this.selectLessonExists();
    let json = null;
    if (flag.status) {
      json = {
        status: 0,
        msg: '添加失败,课程已存在！',
        data: [],
      };
    } else {
      const res = await this.sendRequest('POST', 'teacherRelated', 'createLesson');
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

  async deleteLesson() {
    const res = await this.sendRequest('POST', 'teacherRelated', 'deleteLesson');
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
  }

  async isbindClassAndLesson() {
    const res = await this.sendRequest('POST', 'teacherRelated', 'isbindClassAndLesson');
    let json = null;
    if (res) {
      json = {
        status: 1,
        msg: '课程已绑定！',
        data: res,
      };
    } else {
      json = {
        status: 0,
        msg: '课程未绑定',
        data: [],
      };
    }
    this.ctx.body = json;
    return json;
  }

  async bindClassAndLesson() {
    const flag = await this.isbindClassAndLesson();
    let json = null;
    if (flag.status) {
      json = {
        status: 0,
        msg: '绑定失败,班级与课程已绑定！',
        data: [],
      };
    } else {
      const res = await this.sendRequest('POST', 'teacherRelated', 'bindClassAndLesson');
      if (res) {
        json = {
          status: 1,
          msg: '绑定成功！',
          data: res,
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

  // 待续。。。
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

  async selectExperimentsByClass() {
    const res = await this.sendRequest('POST', 'teacherRelated', 'selectExperimentsByClass');
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

}

module.exports = teacherRelated;
