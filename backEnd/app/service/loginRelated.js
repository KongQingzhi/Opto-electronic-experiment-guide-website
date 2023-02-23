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
        const res = await app.mysql.select(Table, { where: { s_no: UserNo, s_password: UserPassword } });
        return res
    }
}
module.exports = LoginRelated;