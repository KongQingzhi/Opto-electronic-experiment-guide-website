const { Service } = require('egg');
class LoginRelated extends Service {
    async login(UserNo, UserPassword, Table) {
        
        const sql = `select * from ${Table}`

    }
}
module.exports = LoginRelated;