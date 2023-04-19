const { Service } = require('egg');

class publicRelated extends Service {
  async selectUserInfo(param) {
    const { app } = this;
    if (JSON.stringify(param) === '{}') {
      return 0;
    }
    const { UserNo, Role } = param;
    let table = '';
    let query = null;
    if (Role === 'true') {
      table = 'teachers';
      query = {
        t_no: UserNo,
      };
    } else {
      table = 'students';
      query = {
        s_no: UserNo,
      };
    }
    try {
      const res = await app.mysql.select(table, { where: query });
      if (res.length) {
        return res;
      }
      return 0;
    } catch (e) {
      console.log(e);
      return 0;
    }
  }

  async updateQuestionsContent(param) {
    const { app } = this;
    if (JSON.stringify(param) === '{}') {
      return 0;
    }
    const { s_no, q_id } = param;
    try {
      const res = await app.mysql.update('qs', param, { where: { s_no, q_id } });
      return res.affectedRows;
    } catch (e) {
      console.log(e);
      return 0;
    }
  }

  async selectAllClass() {
    const { app } = this;
    try {
      const res = await app.mysql.query('SELECT c_id, c_name, t.t_no, t_name, t_tel, t_pro FROM classes c LEFT JOIN teachers t ON c.t_no = t.t_no');
      return res;
    } catch (e) {
      console.log(e);
      return [];
    }
  }

  async selectAllLesson() {
    const { app } = this;
    try {
      const res = await app.mysql.query('SELECT l_id, l_name, l_time FROM lessons');
      // const res = await app.mysql.query('SELECT c.c_id, c_name,cl.l_id,l_name,l_time,t.t_no,t.t_name,t_pro,t_tel,t.t_super FROM classes c RIGHT JOIN cl ON c.c_id = cl.c_id LEFT JOIN lessons l ON cl.l_id = l.l_id LEFT JOIN lt ON l.l_id = lt.l_id LEFT JOIN teachers t ON lt.t_no = t.t_no');
      return res;
    } catch (e) {
      console.log(e);
      return [];
    }
  }

  async selectAllRooms() {
    const { app } = this;
    try {
      const res = await app.mysql.select('rooms');
      return res;
    } catch (e) {
      console.log(e);
      return [];
    }
  }

  async selectAllExperiments() {
    const { app } = this;
    try {
      const res = await app.mysql.query('SELECT e.e_id, e_name, e_content, e_files, e_time, t_name, t_tel, t_pro, r_build, r_no FROM experiments e LEFT JOIN teachers t ON e.t_no = t.t_no LEFT JOIN rooms r ON e.r_id = r.r_id');
      return res;
    } catch (e) {
      console.log(e);
      return [];
    }
  }

  async selectAllQuestions() {
    const { app } = this;
    try {
      const res = await app.mysql.query('SELECT q.q_id, q_content, e_name, t_name, t_tel FROM questions q LEFT JOIN experiments e ON q.e_id = e.e_id LEFT JOIN teachers t ON q.t_no = t.t_no');
      return res;
    } catch (e) {
      console.log(e);
      return [];
    }
  }

  async selectAllTeachers() {
    const { app } = this;
    try {
      const res = await app.mysql.select('teachers');
      return res;
    } catch (e) {
      console.log(e);
      return [];
    }
  }
  async selectClassAndLesson() {
    const { app } = this;
    try {
      const res = await app.mysql.query('SELECT cl_id, cl.c_id, cl.l_id, c_name, l_name, l_time FROM cl LEFT JOIN classes c ON cl.c_id = c.c_id LEFT JOIN lessons l ON cl.l_id = l.l_id');
      return res;
    } catch (e) {
      console.log(e);
      return [];
    }
  }
  async selectLessonAndTeacher() {
    const { app } = this;
    try {
      const res = await app.mysql.query('SELECT lt_id, lt.l_id, l_name, l_time, t_name, t_tel FROM	lt LEFT JOIN lessons l ON l.l_id = lt.l_id LEFT JOIN teachers t ON lt.t_no = t.t_no');
      return res;
    } catch (e) {
      console.log(e);
      return [];
    }
  }
  async selectLessonAndExperiment() {
    const { app } = this;
    try {
      const res = await app.mysql.query('SELECT el_id, el.l_id, e_name, e_time, l_name, l_time FROM el LEFT JOIN experiments e ON e.e_id = el.e_id LEFT JOIN lessons l ON l.l_id = el.l_id');
      return res;
    } catch (e) {
      console.log(e);
      return [];
    }
  }
}


module.exports = publicRelated;
