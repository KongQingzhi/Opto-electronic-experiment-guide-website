const { Service } = require('egg');

class studentRelated extends Service {
    async getAllClass() {
        const { app } = this;
        try {
            const res = await app.mysql.select('classes');
            return res
        } catch {
            return []
        }
    }

    async bindClass(param) {
        const { app } = this;
        const { s_no, c_id } = param;
        try {
            const res = await app.mysql.update('students', { c_id }, { where: { s_no } });
            return res.affectedRows
        } catch {
            return "绑定班级失败"
        }
    }
}

module.exports = studentRelated