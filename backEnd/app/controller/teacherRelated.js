const { Controller } = require('egg');

class teacherRelated extends Controller {
    async addLessons() {
        const { ctx } = this;
        const query = ctx.request.body;
        const res = await ctx.service.teacherRelated.addLessons(query);
        ctx.body = res;
    }

    async publishExperiment() {
        const { ctx } = this;
        const query = ctx.request.body;
        const res = await ctx.service.teacherRelated.publishExperiment(query);
        ctx.body = res;
    }

    async bindExperimentLessons() {
        const { ctx } = this;
        const query = ctx.request.body;
        const res = await ctx.service.teacherRelated.bindExperimentLessons(query);
        ctx.body = res;
    }

    
}

module.exports = teacherRelated;
