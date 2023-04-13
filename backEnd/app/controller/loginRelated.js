const nodemailer = require('nodemailer');
const Send = require('../utils/sendRequest');
class LoginRelated extends Send {
  // get请求获取参数
  // const query = ctx.query;
  // post请求获取参数
  // const query = ctx.request.body;
  async login() {
    const res = await this.sendRequest('POST', 'loginRelated', 'login');
    let json = null;
    if (res) {
      json = {
        status: 1,
        msg: '登陆成功！',
        data: res,
      };
    } else {
      json = {
        status: 0,
        msg: '登陆失败，请检查账号与密码是否匹配！',
        data: [],
      };
    }
    this.ctx.body = json;
  }

  async accountExists() {
    const res = await this.sendRequest('POST', 'loginRelated', 'accountExists');
    console.log(res);
    let json = null;
    if (res) {
      json = {
        status: 1,
        msg: '账号已存在',
        data: res,
      };
    } else {
      json = {
        status: 0,
        msg: '账号不存在',
        data: [],
      };
    }
    this.ctx.body = json;
    return json;
  }

  async register() {
    const flag = await this.accountExists();
    let json = null;
    if (flag.status) {
      json = {
        status: 0,
        msg: '账号已存在，请勿重复注册！',
        data: [],
      };
      this.ctx.body = json;
    } else {
      const res = await this.sendRequest('POST', 'loginRelated', 'register');
      if (res) {
        json = {
          status: 1,
          msg: '注册成功！,快去登陆吧！',
          data: [],
        };
      } else {
        json = {
          status: 0,
          msg: '注册失败！账号已存在，请勿重复注册！',
          data: [],
        };
      }
      this.ctx.body = json;
    }
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
      },
    });

    const mailOptions = {
      from: '"光电实验指导网" <1428390162@qq.com>', // sender address
      to: s_email, // list of receivers
      subject: '验证码', // Subject line
      html: verifyCode, // html body
    };

    try {
      transporter.sendMail(mailOptions, error => {
        if (error) {
          return console.log(error);
        }
      });
      ctx.body = verifyCode;
    } catch {
      ctx.body = '';
    }
  }

  async retrievePassword() {
    const flag = await this.accountExists();
    let json = null;
    if (flag.status) {
      const res = await this.sendRequest('POST', 'loginRelated', 'retrievePassword');
      if (res) {
        json = {
          status: 1,
          msg: '修改密码成功！',
          data: [],
        };
      } else {
        json = {
          status: 0,
          msg: '修改密码失败！',
          data: [],
        };
      }
      this.ctx.body = json;
    } else {
      json = {
        status: 0,
        msg: '账号不存在，请注册！',
        data: [],
      };
      this.ctx.body = json;
    }
  }
}
module.exports = LoginRelated;
