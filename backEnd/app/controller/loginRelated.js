const { Controller } = require('egg');
class LoginRelated extends Controller {
    // async getParams() {
    //     const { ctx } = this;
    //     if (ctx.request.method === "GET") {
    //         return ctx.query
    //     } else if (ctx.request.method === "POST") {
    //         return ctx.request.body;
    //     }
    // }

    // get请求获取参数
    // const query = ctx.query;
    // post请求获取参数
    // const query = ctx.request.body;
    async login() {
        const { ctx } = this;
        const query = ctx.query;
        const res = await ctx.service.loginRelated.login(query)
        ctx.body = {
            state: 200,
            data: res
        };
    }
}
module.exports = LoginRelated;