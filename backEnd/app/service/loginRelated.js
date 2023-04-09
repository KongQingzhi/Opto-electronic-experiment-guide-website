const { Service } = require('egg');
class LoginRelated extends Service {
  async login(param) {
    const { app } = this;
    const { UserNo, UserPassword, Role } = param;
    let table = '';
    let query = null;
    if (Role) {
      table = 'teachers';
      query = {
        t_no: UserNo,
        t_password: UserPassword,
      };
    } else {
      table = 'students';
      query = {
        s_no: UserNo,
        s_password: UserPassword,
      };
    }
    try {
      const res = await app.mysql.select(table, { where: query });
      return res;
    } catch (e) {
      console.log(e);
      return 0;
    }
  }

  async accountExists(param) {
    const { app } = this;
    const { UserNo, Role } = param;
    let table = '';
    let query = null;
    if (Role) {
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
      return res;
    } catch (e) {
      console.log(e);
      return 0;
    }
  }

  async register(param) {
    const { app } = this;
    const query = {
      s_no: param.UserNo,
      s_password: param.UserPassword,
      s_email: param.s_email,
      s_name: param.s_name,
      s_gender: param.s_gender,
    };
    try {
      const res = await app.mysql.insert('students', query);
      return res.affectedRows;
    } catch (e) {
      console.log(e);
      return 0;
    }
  }

  async retrievePassword(param) {
    const { app } = this;
    const { UserNo, UserPassword, Role } = param;
    let table = '';
    let query1 = null;
    let query2 = null;
    if (Role) {
      table = 'teachers';
      query1 = {
        t_no: UserNo,
      };
      query2 = {
        t_password: UserPassword,
      };
    } else {
      table = 'students';
      query1 = {
        s_no: UserNo,
      };
      query2 = {
        s_password: UserPassword,
      };
    }
    try {
      const res = await app.mysql.update(table, query2, { where: query1 });
      return res.affectedRows;
    } catch (e) {
      console.log(e);
      return 0;
    }
  }
}
module.exports = LoginRelated;
