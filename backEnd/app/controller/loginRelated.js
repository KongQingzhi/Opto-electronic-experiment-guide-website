import { getParams } from '../utils/getParams';
const { Controller } = require('egg');
class LoginRelated extends Controller {
    async login() {
        const { ctx } = this;
        const query = getParams()
        console.log(query);
        ctx.body = query
    }
}
module.exports = LoginRelated;