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

  async isbindTeacherAndLesson() {
    const res = await this.sendRequest('POST', 'teacherRelated', 'isbindTeacherAndLesson');
    let json = null;
    if (res) {
      json = {
        status: 1,
        msg: '教师与课程已绑定！',
        data: res,
      };
    } else {
      json = {
        status: 0,
        msg: '教师与课程未绑定',
        data: [],
      };
    }
    this.ctx.body = json;
    return json;
  }

  async bindTeacherAndLesson() {
    const flag = await this.isbindTeacherAndLesson();
    let json = null;
    if (flag.status) {
      json = {
        status: 0,
        msg: '绑定失败,教师与课程已绑定！',
        data: [],
      };
    } else {
      const res = await this.sendRequest('POST', 'teacherRelated', 'bindTeacherAndLesson');
      if (res) {
        json = {
          status: 1,
          msg: '教师与课程绑定成功！',
          data: res,
        };
      } else {
        json = {
          status: 0,
          msg: '教师与课程绑定失败',
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

  async releaseExperiment() {
    const flag = await this.experimentExists();
    let json = null;
    if (flag.status) {
      json = {
        status: 0,
        msg: '添加失败,实验已存在！',
        data: [],
      };
    } else {
      const res = await this.sendRequest('POST', 'teacherRelated', 'releaseExperiment');
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

  async deleteExperiment() {
    const res = await this.sendRequest('POST', 'teacherRelated', 'deleteExperiment');
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

  async isbindExperimentLesson() {
    const res = await this.sendRequest('POST', 'teacherRelated', 'isbindExperimentLesson');
    let json = null;
    if (res) {
      json = {
        status: 1,
        msg: '实验与课程已绑定！',
        data: res,
      };
    } else {
      json = {
        status: 0,
        msg: '实验与课程未绑定',
        data: [],
      };
    }
    this.ctx.body = json;
    return json;
  }

  async bindExperimentLesson() {
    const flag = await this.isbindExperimentLesson();
    let json = null;
    if (flag.status) {
      json = {
        status: 0,
        msg: '实验与课程已绑定，请勿重复操作！',
        data: [],
      };
    } else {
      const res = await this.sendRequest('POST', 'teacherRelated', 'bindExperimentLesson');
      if (res) {
        json = {
          status: 1,
          msg: '实验与课程绑定成功！',
          data: [],
        };
      } else {
        json = {
          status: 0,
          msg: '实验与课程绑定失败',
          data: [],
        };
      }
    }
    this.ctx.body = json;
  }

  async releaseQuestion() {
    let json = null;
    const res = await this.sendRequest('POST', 'teacherRelated', 'releaseQuestion');
    if (res) {
      json = {
        status: 1,
        msg: '发布成功！',
        data: [],
      };
    } else {
      json = {
        status: 0,
        msg: '发布失败',
        data: [],
      };
    }
    this.ctx.body = json;
  }

  async deleteQuestion() {
    const res = await this.sendRequest('POST', 'teacherRelated', 'deleteQuestion');
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

  async selectStudentsQuestionGradeByTeacher() {
    let json = null;
    const res = await this.sendRequest('GET', 'teacherRelated', 'selectStudentsQuestionGradeByTeacher');
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

  async questionScoring() {
    let json = null;
    const res = await this.sendRequest('POST', 'teacherRelated', 'questionScoring');
    if (res) {
      json = {
        status: 1,
        msg: '打分成功！',
        data: [],
      };
    } else {
      json = {
        status: 0,
        msg: '打分失败',
        data: [],
      };
    }
    this.ctx.body = json;
  }

  async selectStudentsExperimentGradeByTeacher() {
    let json = null;
    const res = await this.sendRequest('GET', 'teacherRelated', 'selectStudentsExperimentGradeByTeacher');
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

  async experimentScoring() {
    let json = null;
    const res = await this.sendRequest('POST', 'teacherRelated', 'experimentScoring');
    if (res) {
      json = {
        status: 1,
        msg: '打分成功！',
        data: [],
      };
    } else {
      json = {
        status: 0,
        msg: '打分失败',
        data: [],
      };
    }
    this.ctx.body = json;
  }

  async selectExperimentsByClass() {
    const res = await this.sendRequest('POST', 'teacherRelated', 'selectExperimentsByClass');
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

  async deleteClassAndLesson() {
    const res = await this.sendRequest('POST', 'teacherRelated', 'deleteClassAndLesson');
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

  async deleteLessonAndTeacher() {
    const res = await this.sendRequest('POST', 'teacherRelated', 'deleteLessonAndTeacher');
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

  async deleteLessonAndExperiment() {
    const res = await this.sendRequest('POST', 'teacherRelated', 'deleteLessonAndExperiment');
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

}

module.exports = teacherRelated;
