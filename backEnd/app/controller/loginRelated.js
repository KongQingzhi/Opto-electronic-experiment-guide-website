const { Controller } = require('egg');
const nodemailer = require('nodemailer');
class LoginRelated extends Controller {
    // get请求获取参数
    // const query = ctx.query;
    // post请求获取参数
    // const query = ctx.request.body;
    async login() {
        const { ctx } = this;
        const query = ctx.query;
        const res = await ctx.service.loginRelated.login(query)
        ctx.body = res;
    }

    async register() {
        const { ctx } = this;
        const query = ctx.request.body;
        const res = await ctx.service.loginRelated.register(query)
        ctx.body = res;
    }

    async verify() {
        const { ctx } = this;
        const { s_email } = ctx.request.body;
        const verifyCode = Math.random().toString().substring(2, 8);
        const transporter = nodemailer.createTransport({
            service: 'qq', // 使用了内置传输发送邮件 查看支持列表：https://nodemailer.com/smtp/well-known/
            port: 465, // SMTP 端口
            secureConnection: true, // 使用了 SSL
            auth: {
                user: '1428390162@qq.com',
                // 这里密码不是qq密码，是你设置的smtp授权码
                pass: 'siifqafrxskohhge',
            }
        });

        const mailOptions = {
            from: '"光电实验指导网" <1428390162@qq.com>', // sender address
            to: s_email, // list of receivers
            subject: '验证码', // Subject line
            html: verifyCode // html body
        };

        try {
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
            });
            ctx.body = verifyCode
        } catch {
            ctx.body = ''
        }
    }

    async retrievePassword() {
        const { ctx } = this;
        const query = ctx.request.body;
        const res = await ctx.service.loginRelated.retrievePassword(query);
        ctx.body = res
    }

}
module.exports = LoginRelated;





