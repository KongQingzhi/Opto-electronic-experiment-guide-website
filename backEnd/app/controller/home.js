'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const str = await ctx.service.home.index();
    console.log(str);
    ctx.body = str;
  }
}

module.exports = HomeController;
