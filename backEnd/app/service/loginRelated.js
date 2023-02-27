const { Service } = require('egg');
class LoginRelated extends Service {
    async login(param) {
        const { app } = this;
        const { UserNo, UserPassword, Role } = param;
        let Table = ''
        if (Role) {
            Table = 'students'
        } else {
            Table = 'teachers'
        }
        try {
            const res = await app.mysql.select(Table, { where: { s_no: UserNo, s_password: UserPassword } });
            return res
        } catch (e) {
            console.log(e);
            return []
        }

    }

    async register(param) {
        const { app } = this;
        try {
            const res = await app.mysql.insert('students', param);
            return res.affectedRows;
        } catch (e) {
            console.log(e);
            return "账号已存在，快去登录吧！";
        }
    }

    async retrievePassword(param) {
        const { app } = this;
        const { s_no, s_password } = param;
        try {
            const res = await app.mysql.update('students', { s_password }, { where: { s_no } });
            return res.affectedRows;
        } catch (e) {
            console.log(e);
            return "修改密码失败";
        }
    }
}
module.exports = LoginRelated;