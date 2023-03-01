const { Controller } = require('egg');
class Send extends Controller{
    async sendRequest(method,serviceName,methodName) {
        const { ctx } = this;
        let query = {};
        if (method == 'GET') {
            query = ctx.query;
        } else if (method == 'POST') {
            query = ctx.request.body;
        }
        const res = await ctx.service[serviceName][methodName](query);
        return res;
    }
}

module.exports = Send;