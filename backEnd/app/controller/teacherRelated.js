const { Controller } = require('egg');
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
        const res = await this.sendRequest('GET', 'teacherRelated', 'selectELBind')
        this.ctx.body = res;
        return res;
    }

    async bindExperimentLessons() {
        const flag = this.selectELBind();
        if (!flag) {
            const res = await this.sendRequest('GET', 'teacherRelated', 'bindExperimentLessons')
            this.ctx.body = res;
        } else {
            this.ctx.body = '课程与实验已绑定，请勿重复操作！';
        }
    }




}

module.exports = teacherRelated;
