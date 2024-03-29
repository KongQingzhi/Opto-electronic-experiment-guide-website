const { Service } = require('egg');

class studentRelated extends Service {
  async updateUserInfo(param) {
    if (JSON.stringify(param) === '{}') {
      return 0;
    }
    const { app } = this;
    const { s_no } = param;
    try {
      if (!param.c_id) {
        const res = await app.mysql.update('students', param, { where: { s_no } });
        return res.affectedRows;
      }
      const info = await app.mysql.select('students', { where: { s_no } });
      const { c_id } = info[0];
      if (c_id) {
        const res = await app.mysql.update('students', param, { where: { s_no } });
        return res.affectedRows;
      }
      const res = await app.mysql.update('students', param, { where: { s_no } });
      await app.mysql.query('INSERT INTO ls(l_id,s_no) SELECT l_id, ? FROM cl WHERE c_id = ?', [ s_no, param.c_id ]);
      await app.mysql.query('INSERT INTO es(e_id,s_no) SELECT e_id, ? FROM cl LEFT JOIN el ON cl.l_id = el.l_id WHERE c_id = ?;', [ s_no, param.c_id ]);
      await app.mysql.query('INSERT INTO qs(q_id,s_no) SELECT q_id, ? FROM cl LEFT JOIN el ON cl.l_id = el.l_id RIGHT JOIN questions q ON el.e_id = q.e_id WHERE c_id = ?', [ s_no, param.c_id ]);
      return res.affectedRows;
    } catch (e) {
      console.log(e);
      return 0;
    }
  }

  async selectExperiments(param) {
    if (JSON.stringify(param) === '{}') {
      return 0;
    }
    const { app } = this;
    try {
      const res = await app.mysql.query('SELECT l_name, l_time, e.e_id, e_name, e_content, e_files, e_time, t_name, t_tel, t_pro, r_build, r_no  FROM students s LEFT JOIN cl ON s.c_id = cl.c_id LEFT JOIN lessons l ON cl.l_id = l.l_id LEFT JOIN el ON l.l_id = el.l_id LEFT JOIN experiments e ON el.e_id = e.e_id LEFT JOIN teachers t ON e.t_no = t.t_no LEFT JOIN rooms r ON e.r_id = r.r_id WHERE s.s_no=?', [ param.s_no ]);
      return res;
    } catch (e) {
      console.log(e);
      return 0;
    }
  }

  async experimentsContent(param) {
    if (JSON.stringify(param) === '{}') {
      return 0;
    }
    const { app } = this;
    try {
      const res = await app.mysql.query('SELECT e_name, e_content, e_time, e_files, t_name, t_tel, t_pro, r_build, r_no  FROM  experiments e LEFT JOIN teachers t ON e.t_no = t.t_no LEFT JOIN rooms r ON e.r_id = r.r_id WHERE e.e_id = ?', [ param.e_id ]);
      return res;
    } catch (e) {
      console.log(e);
      return 0;
    }
  }

  async selectQuestions(param) {
    if (JSON.stringify(param) === '{}') {
      return 0;
    }
    const { app } = this;
    try {
      const res = await app.mysql.query('SELECT l_name, l_time, e.e_name, q.q_id, q_finish, q_grade, t_name FROM students s LEFT JOIN cl ON s.c_id = cl.c_id LEFT JOIN lessons l ON cl.l_id = l.l_id LEFT JOIN el ON l.l_id = el.l_id LEFT JOIN experiments e ON el.e_id = e.e_id RIGHT JOIN questions q ON e.e_id = q.e_id LEFT JOIN qs ON q.q_id = qs.q_id AND qs.s_no = ? LEFT JOIN teachers t ON q.t_no = t.t_no WHERE s.s_no= ? ', [ param.s_no, param.s_no ]);
      return res;
    } catch (e) {
      console.log(e);
      return 0;
    }
  }

  async questionsContent(param) {
    if (JSON.stringify(param) === '{}') {
      return 0;
    }
    const { app } = this;
    try {
      if (Number(param.q_finish)) {
        const res = await app.mysql.query('SELECT q_content, q_reply, q_reserve, q_finish, q_grade  from questions q LEFT JOIN qs ON q.q_id = qs.q_id WHERE s_no = ? AND q.q_id = ?', [ param.s_no, param.q_id ]);
        return res;
      }
      const res = await app.mysql.select('questions', { where: { q_id: param.q_id } });
      return res;
    } catch (e) {
      console.log(e);
      return 0;
    }
  }

  async replyQuestions(param) {
    if (JSON.stringify(param) === '{}') {
      return 0;
    }
    const { app } = this;
    try {
      const res = await app.mysql.update('qs', param, { where: { s_no: param.s_no, q_id: param.q_id } });
      return res.affectedRows;
    } catch (e) {
      console.log(e);
      return 0;
    }
  }

  async selectExperimentsScore(param) {
    if (JSON.stringify(param) === '{}') {
      return 0;
    }
    const { app } = this;
    try {
      const res = await app.mysql.query('SELECT l_name, l_time, e.e_name, e.e_id, es.e_grade, q.q_id, q_finish, q_grade, t_name FROM students s LEFT JOIN cl ON s.c_id = cl.c_id LEFT JOIN lessons l ON cl.l_id = l.l_id LEFT JOIN el ON l.l_id = el.l_id INNER JOIN experiments e ON el.e_id = e.e_id LEFT JOIN questions q ON e.e_id = q.e_id LEFT JOIN qs ON q.q_id = qs.q_id AND qs.s_no = ? LEFT JOIN es ON e.e_id = es.e_id  AND es.s_no= ? LEFT JOIN teachers t ON q.t_no = t.t_no WHERE s.s_no= ? ;', [ param.s_no, param.s_no, param.s_no ]);
      return res;
    } catch (e) {
      console.log(e);
      return 0;
    }
  }

  async selectLessonsScore(param) {
    if (JSON.stringify(param) === '{}') {
      return 0;
    }
    const { app } = this;
    try {
      const res = await app.mysql.query('SELECT l_name, l_time, e.e_name, e.e_id, es.e_grade, q.q_id, q_finish, q_grade, t_name FROM students s LEFT JOIN cl ON s.c_id = cl.c_id LEFT JOIN lessons l ON cl.l_id = l.l_id LEFT JOIN ls ON l.l_id = ls.l_id AND ls.s_no = s.s_no LEFT JOIN el ON l.l_id = el.l_id LEFT JOIN experiments e ON el.e_id = e.e_id LEFT JOIN questions q ON e.e_id = q.e_id LEFT JOIN qs ON q.q_id = qs.q_id AND qs.s_no = s.s_no RIGHT JOIN es ON e.e_id = es.e_id AND es.s_no = s.s_no LEFT JOIN teachers t ON q.t_no = t.t_no WHERE s.s_no = ?', [ param.s_no ]);
      return res;
    } catch (e) {
      console.log(e);
      return 0;
    }
  }


  async getClassByStudent(param) {
    const { app } = this;
    try {
      const classList = await app.mysql.select('students', { where: param, columns: [ 'c_id' ] });
      if (classList.length === 0) {
        return '未绑定班级!';
      }
      const { c_id } = classList[0];
      const res = await app.mysql.select('classes', { where: { c_id }, columns: [ 'c_name' ] });
      return res;

    } catch (e) {
      console.log(e);
      return [];
    }
  }

  async selectBindClass(param) {
    const { app } = this;
    try {
      const res = await app.mysql.select('students', { where: param });
      return res;
    } catch (e) {
      console.log(e);
      return [];
    }
  }

  async getAllLessons() {
    const { app } = this;
    try {
      const res = await app.mysql.select('lessons');
      return res;
    } catch (e) {
      console.log(e);
      return [];
    }
  }

}

module.exports = studentRelated;
