const { Service } = require('egg');

class studentRelated extends Service {
    async getAllClass() {
        const { app } = this;
        try {
            const res = await app.mysql.select('classes');
            return res
        } catch (e) {
            console.log(e);
            return []
        }
    }

    async bindClass(param) {
        const { app } = this;
        const { s_no, c_id } = param;
        try {
            const res = await app.mysql.update('students', { c_id }, { where: { s_no } });
            return res.affectedRows
        } catch (e) {
            console.log(e);
            return "绑定班级失败"
        }
    }

    async getClassByStudent(param) {
        const { app } = this;
        try {
            const classList = await app.mysql.select('students', { where: param, columns: ['c_id'] });
            if (classList.length == 0) {
                return '未绑定班级!';
            } else {
                const { c_id } = classList[0];
                const res = await app.mysql.select('classes', { where: { c_id }, columns: ['c_name'] })
                return res[0].c_name;
            }
        } catch (e) {
            console.log(e);
            return "未绑定班级!"
        }
    }

    async getAllLessons() {
        const { app } = this;
        try {
            const res = await app.mysql.select('lessons');
            return res
        } catch (e) {
            console.log(e);
            return []
        }
    }
}

module.exports = studentRelated