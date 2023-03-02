const { Service } = require('egg');

class teacherRelated extends Service {
    async addLessons(param) {
        const { app } = this;
        try {
            const res = await app.mysql.insert('lessons', param);
            return res.affectedRows;
        } catch (e) {
            console.log(e);
            return '添加课程失败！'
        }
    }

    async publishExperiment(param) {
        const { app } = this;
        try {
            const res = await app.mysql.insert('experiments', param);
            return res.affectedRows;
        } catch (e) {
            console.log(e);
            return '添加实验失败！'
        }
    }

    async selectELBind(param) {
        const { app } = this;
        try {
            const res = await app.mysql.select('el', { where: param });
            return res.length;
        } catch (e) {
            console.log(e);
            return '查询课程实验绑定失败！'
        }
    }

    async bindExperimentLessons(param) {
        const { app } = this;
        try {
            const res = await app.mysql.insert('el', param);
            return res.affectedRows;
        } catch (e) {
            console.log(e);
            return '实验与课程绑定失败！'
        }
    }

    async selectClass(param) {
        const { app } = this;
        try {
            const res = await app.mysql.select('classes', { where: param });
            return res.length;
        } catch (e) {
            console.log(e);
            return '查询班级失败！'
        }
    }

    async createClass(param) {
        const { app } = this;
        try {
            const res = await app.mysql.insert('classes', param);
            return res.affectedRows;
        } catch (e) {
            console.log(e);
            return '添加班级失败，班级已存在！'
        }
    }



}

module.exports = teacherRelated