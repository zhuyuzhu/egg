'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    console.log(this)
    const { ctx } = this;
    let content = `服务器上开通的端口有限，可以通过http访问的是80端口，所以通过浏览器访问的时候，
    只能通过ip地址+80端口来访问服务器，再经过nginx的转发，跳转到172.0.0.1:7001端口上，该端口服务
    是由egg.js启动的node服务。
    通过在服务器上安装git，yum git，每次通过git来获取项目代码，再进行编译运行。`
    ctx.body = content; //响应内容
  }
}

module.exports = HomeController;
