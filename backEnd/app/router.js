'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 登录
  router.get('/api/login', controller.loginRelated.login);
  // 注册
  router.post('/api/register', controller.loginRelated.register);
  // 验证
  router.post('/api/verify', controller.loginRelated.verify);
  // 找回密码
  router.post('/api/retrievePassword', controller.loginRelated.retrievePassword)
};
