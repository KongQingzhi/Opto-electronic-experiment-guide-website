'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  /**
   * 登陆相关的接口
   */

  // 登录
  router.get('/api/login', controller.loginRelated.login);
  // 注册
  router.post('/api/register', controller.loginRelated.register);
  // 验证
  router.post('/api/verify', controller.loginRelated.verify);
  // 找回密码
  router.post('/api/retrievePassword', controller.loginRelated.retrievePassword)

  /**
   * 学生有关的接口
   */
  
  // 查询所有班级
  router.get('/api/getAllClass', controller.studentRelated.getAllClass);
  // 绑定班级
  router.post('/api/bindClass', controller.studentRelated.bindClass);
};
