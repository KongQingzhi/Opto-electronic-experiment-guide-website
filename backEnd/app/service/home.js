const { Service } = require('egg');

class Home extends Service{
    async index() {
        const sql = 'select * from students'
        const list = await this.app.mysql.query(sql);
        return list;
    }
}

module.exports = Home