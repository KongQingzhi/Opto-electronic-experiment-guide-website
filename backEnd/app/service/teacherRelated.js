const { Service } = require('egg');

class teacherRelated extends Service {
  async lessonExists(param) {
    const { app } = this;
    try {
      const res = await app.mysql.select('lessons', { where: param });
      return res;
    } catch (e) {
      console.log(e);
      return [];
    }
  }
  async addLessons(param) {
    const { app } = this;
    try {
      const res = await app.mysql.insert('lessons', param);
      return res.affectedRows;
    } catch (e) {
      console.log(e);
      return 0;
    }
  }

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

  async selectClass(param) {
    const { app } = this;
    try {
      const res = await app.mysql.select('classes', { where: param });
      return res;
    } catch (e) {
      console.log(e);
      return [];
    }
  }

  async createClass(param) {
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
    const { app } = this;
    try {
      const res = await app.mysql.delete('classes', { c_id: param.c_id });
      return res.affectedRows;
    } catch (e) {
      console.log(e);
      return 0;
    }
  }


}

module.exports = teacherRelated;
