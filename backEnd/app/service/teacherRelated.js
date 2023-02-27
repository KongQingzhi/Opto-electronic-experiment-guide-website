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


}

module.exports = teacherRelated