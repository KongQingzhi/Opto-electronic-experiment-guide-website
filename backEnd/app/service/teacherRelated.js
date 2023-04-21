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

  async isbindTeacherAndLesson(param) {
    if (JSON.stringify(param) === '{}') {
      return 0;
    }
    const { app } = this;
    try {
      const res = await app.mysql.select('lt', { where: param });
      if (res.length) {
        return res;
      }
      return 0;
    } catch (e) {
      console.log(e);
      return 0;
    }
  }

  async bindTeacherAndLesson(param) {
    if (JSON.stringify(param) === '{}') {
      return 0;
    }
    const { app } = this;
    try {
      const res = await app.mysql.insert('lt', param);
      return res.affectedRows;
    } catch (e) {
      console.log(e);
      return 0;
    }
  }

  async experimentExists(param) {
    if (JSON.stringify(param) === '{}') {
      return 0;
    }
    const { app } = this;
    try {
      const res = await app.mysql.select('experiments', { where: { e_name: param.e_name } });
      if (res.length) {
        return res;
      }
      return 0;
    } catch (e) {
      console.log(e);
      return [];
    }
  }

  async releaseExperiment(param) {
    const { app } = this;
    try {
      const res = await app.mysql.insert('experiments', param);
      return res.affectedRows;
    } catch (e) {
      console.log(e);
      return 0;
    }
  }

  async deleteExperiment(param) {
    if (JSON.stringify(param) === '{}') {
      return 0;
    }
    const { app } = this;
    try {
      const res = await app.mysql.delete('experiments', { e_id: param.e_id });
      await app.mysql.delete('es', { e_id: param.e_id });
      await app.mysql.delete('el', { e_id: param.e_id });
      await app.mysql.delete('questions', { e_id: param.e_id });
      return res.affectedRows;
    } catch (e) {
      console.log(e);
      return 0;
    }
  }

  async isbindExperimentLesson(param) {
    const { app } = this;
    try {
      const res = await app.mysql.select('el', { where: param });
      await app.mysql.query('INSERT INTO es(e_id,s_no) SELECT ?, s_no FROM students WHERE c_id = ?', [ param.e_id, param.l_id ]);
      if (res.length) {
        return res;
      }
      return 0;
    } catch (e) {
      console.log(e);
      return '实验与课程绑定失败！';
    }
  }

  async bindExperimentLesson(param) {
    const { app } = this;
    try {
      const res = await app.mysql.insert('el', param);
      await app.mysql.query('INSERT INTO es(s_no,e_id) SELECT s_no, ? FROM cl LEFT JOIN students s ON cl.c_id = s.c_id WHERE cl.l_id = ?', [ param.e_id, param.l_id ]);
      return res.affectedRows;
    } catch (e) {
      console.log(e);
      return '实验与课程绑定失败！';
    }
  }

  async releaseQuestion(param) {
    const { app } = this;
    try {
      const res = await app.mysql.insert('questions', param);
      return res.affectedRows;
    } catch (e) {
      console.log(e);
      return 0;
    }
  }


  async deleteQuestion(param) {
    if (JSON.stringify(param) === '{}') {
      return 0;
    }
    const { app } = this;
    try {
      const res = await app.mysql.delete('questions', { q_id: param.q_id });
      return res.affectedRows;
    } catch (e) {
      console.log(e);
      return 0;
    }
  }

  async selectStudentsQuestionGradeByTeacher(param) {
    const { app } = this;
    try {
      const res = await app.mysql.query('SELECT qs_id, l_name, e_name,qs.q_id,qs.s_no,q_finish,q_grade,s_name FROM lt LEFT JOIN lessons l ON lt.l_id = l.l_id LEFT JOIN el ON el.l_id = lt.l_id LEFT JOIN experiments e ON el.e_id = e.e_id LEFT JOIN questions q ON el.e_id = q.e_id RIGHT JOIN qs ON q.q_id = qs.q_id LEFT JOIN students s ON qs.s_no = s.s_no WHERE lt.t_no = ?;', [ param.t_no ]);
      if (res.length) {
        return res;
      }
      return 0;
    } catch (e) {
      console.log(e);
      return 0;
    }
  }

  async questionScoring(param) {
    const { app } = this;
    try {
      const res = await app.mysql.update('qs', param, { where: { qs_id: param.qs_id } });
      return res.affectedRows;
    } catch (e) {
      console.log(e);
      return 0;
    }
  }

  async selectStudentsExperimentGradeByTeacher(param) {
    const { app } = this;
    try {
      const res = await app.mysql.query('SELECT es_id, l_name, e_name, es.s_no, s_name ,e_grade FROM lt LEFT JOIN lessons l ON lt.l_id = l.l_id LEFT JOIN el ON el.l_id = lt.l_id LEFT JOIN experiments e ON el.e_id = e.e_id LEFT JOIN es ON es.e_id = e.e_id LEFT JOIN students s ON es.s_no = s.s_no WHERE lt.t_no = ?', [ param.t_no ]);
      if (res.length) {
        return res;
      }
      return 0;
    } catch (e) {
      console.log(e);
      return 0;
    }
  }

  async experimentScoring(param) {
    const { app } = this;
    try {
      const res = await app.mysql.update('es', param, { where: { es_id: param.es_id } });
      return res.affectedRows;
    } catch (e) {
      console.log(e);
      return 0;
    }
  }

  async deleteClassAndLesson(param) {
    if (JSON.stringify(param) === '{}') {
      return 0;
    }
    const { app } = this;
    try {
      const res = await app.mysql.delete('cl', { cl_id: param.cl_id });
      return res.affectedRows;
    } catch (e) {
      console.log(e);
      return 0;
    }
  }
  async deleteLessonAndTeacher(param) {
    if (JSON.stringify(param) === '{}') {
      return 0;
    }
    const { app } = this;
    try {
      const res = await app.mysql.delete('lt', { lt_id: param.lt_id });
      return res.affectedRows;
    } catch (e) {
      console.log(e);
      return 0;
    }
  }
  async deleteLessonAndExperiment(param) {
    if (JSON.stringify(param) === '{}') {
      return 0;
    }
    const { app } = this;
    try {
      const res = await app.mysql.delete('el', { el_id: param.el_id });
      return res.affectedRows;
    } catch (e) {
      console.log(e);
      return 0;
    }
  }

  // async selectExperimentsByClass(param) {
  //   const { app } = this;
  //   // const { c_id } = param;
  //   try {
  //     const res = await app.mysql.select('classes');
  //     return res;
  //   } catch (e) {
  //     console.log(e);
  //     return [];
  //   }
  // }

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


}

module.exports = teacherRelated;
