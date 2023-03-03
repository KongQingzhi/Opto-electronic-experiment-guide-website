const Send = require('../utils/sendRequest');
class teacherRelated extends Send {
    async addLessons() {
        const res = await this.sendRequest('POST', 'teacherRelated', 'addLessons')
        this.ctx.body = res;
    }

    async publishExperiment() {
        const res = await this.sendRequest('POST', 'teacherRelated', 'publishExperiment')
        this.ctx.body = res;
    }

    async selectELBind() {
        const res = await this.sendRequest('POST', 'teacherRelated', 'selectELBind')
        this.ctx.body = res;
        return res;
    }

    async bindExperimentLessons() {
        const flag = await this.selectELBind();
        if (!flag) {
            const res = await this.sendRequest('POST', 'teacherRelated', 'bindExperimentLessons')
            this.ctx.body = res;
        } else {
            this.ctx.body = '课程与实验已绑定，请勿重复操作！';
        }
    }

    async selectClass() {
        const res = await this.sendRequest('POST', 'teacherRelated', 'selectClass')
        this.ctx.body = res;
        return res;
    }

    async createClass() {
        const flag = await this.selectClass();
        if (!flag) {
            const res = await this.sendRequest('POST', 'teacherRelated', 'createClass')
            this.ctx.body = res;
        } else {
            this.ctx.body = '班级已存在，请勿重复操作！';
        }
    }



}

module.exports = teacherRelated;
