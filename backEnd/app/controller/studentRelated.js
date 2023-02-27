const { Controller } = require('egg');

class studentRelated extends Controller {
  async getAllClass() {
    const { ctx } = this;
    const res = await ctx.service.studentRelated.getAllClass();
    ctx.body = res;
  }

  async bindClass() {
    const { ctx } = this;
    const query = ctx.request.body;
    const res = await ctx.service.studentRelated.bindClass(query);
    ctx.body = res;
  }

  async getClassByStudent() {
    const { ctx } = this;
    const query = ctx.query;
    const res = await ctx.service.studentRelated.getClassByStudent(query);
    ctx.body = res;
  }

  async getAllLessons() {
    const { ctx } = this;
    const res = await ctx.service.studentRelated.getAllLessons();
    ctx.body = res;
  }

}

module.exports = studentRelated;