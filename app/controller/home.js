'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    console.log(this)
    const { ctx } = this;
    ctx.body = this; //响应内容
  }
}

module.exports = HomeController;
