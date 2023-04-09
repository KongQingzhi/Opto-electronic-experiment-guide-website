const { Service } = require('egg');

class teacherRelated extends Service {
  async selectClassExists(param) {
    if (JSON.stringify(param) === '{}') {
      return 0;
    }
    const { app } = this;
    try {
      const res = await app.mysql.select('classes', { where: param });
      if (res.length) {
        return res;
      }
      return 0;
    } catch (e) {
      console.log(e);
      return 0;
    }
  }

  async createClass(param) {
    if (JSON.stringify(param) === '{}') {
      return 0;
    }
    const { app } = this;
    try {
      const res = await app.mysql.insert('classes', param);
      return res.affectedRows;
    } catch (e) {
      console.log(e);
      return 0;
    }
  }

  async deleteClass(param) {
    if (JSON.stringify(param) === '{}') {
      return 0;
    }
    const { app } = this;
    try {
      const res = await app.mysql.delete('classes', { c_id: param.c_id });
      return res.affectedRows;
    } catch (e) {
      console.log(e);
      return 0;
    }
  }

  async selectLessonExists(param) {
    if (JSON.stringify(param) === '{}') {
      return 0;
    }
    const { app } = this;
    try {
      const res = await app.mysql.select('lessons', { where: param });
      if (res.length) {
        return res;
      }
      return 0;
    } catch (e) {
      console.log(e);
      return 0;
    }
  }

  async createLesson(param) {
    if (JSON.stringify(param) === '{}') {
      return 0;
    }
    const { app } = this;
    try {
      const res = await app.mysql.insert('lessons', param);
      return res.affectedRows;
    } catch (e) {
      console.log(e);
      return 0;
    }
  }

  async deleteLesson(param) {
    if (JSON.stringify(param) === '{}') {
      return 0;
    }
    const { app } = this;
    try {
      const res = await app.mysql.delete('lessons', { l_id: param.l_id });
      return res.affectedRows;
    } catch (e) {
      console.log(e);
      return 0;
    }
  }

  async isbindClassAndLesson(param) {
    if (JSON.stringify(param) === '{}') {
      return 0;
    }
    const { app } = this;
    try {
      const res = await app.mysql.select('cl', { where: param });
      if (res.length) {
        return res;
      }
      return 0;
    } catch (e) {
      console.log(e);
      return 0;
    }
  }

  async bindClassAndLesson(param) {
    if (JSON.stringify(param) === '{}') {
      return 0;
    }
    const { app } = this;
    try {
      const res = await app.mysql.insert('cl', param);
      return res.affectedRows;
    } catch (e) {
      console.log(e);
      return 0;
    }
  }

  // 待续。。。
  async experimentExists(param) {
    const { app } = this;
    try {
      const res = await app.mysql.select('experiments', { where: { e_name: param.e_name } });
      return res;
    } catch (e) {
      console.log(e);
      return [];
    }
  }

  async publishExperiment(param) {
    const { app } = this;
    try {
      const res = await app.mysql.insert('experiments', param);
      return res.affectedRows;
    } catch (e) {
      console.log(e);
      return 0;
    }
  }

  async selectExperimentsByClass(param) {
    const { app } = this;
    const { c_id } = param;
    try {
      const res = await app.mysql.select('classes');
      return res;
    } catch (e) {
      console.log(e);
      return [];
    }
  }

  async selectELBind(param) {
    const { app } = this;
    try {
      const res = await app.mysql.select('el', { where: param });
      return res;
    } catch (e) {
      console.log(e);
      return [];
    }
  }

  async bindExperimentLessons(param) {
    const { app } = this;
    try {
      const res = await app.mysql.insert('el', param);
      return res.affectedRows;
    } catch (e) {
      console.log(e);
      return '实验与课程绑定失败！';
    }
  }


}

module.exports = teacherRelated;
