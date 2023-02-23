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
        const sql = `select * from ${Table} where s_no = ${UserNo} and s_password = ${UserPassword}`
        const res = await app.mysql.query(sql);
        return res
    }
}
module.exports = LoginRelated;