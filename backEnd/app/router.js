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
  // 查询用户班级
  router.get('/api/getClassByStudent', controller.studentRelated.getClassByStudent);
  // 查询所有课程
  router.get('/api/getAllLessons', controller.studentRelated.getAllLessons);


  /**
   * 教师有关
   */

  // 添加课程
  router.post('/api/addLessons', controller.teacherRelated.addLessons);
  // 发布实验
  router.post('/api/publishExperiment', controller.teacherRelated.publishExperiment);
  // 查询课程与实验的绑定情况
  router.get('/api/selectELBind', controller.teacherRelated.selectELBind);
  // 实验课程绑定
  router.post('/api/bindExperimentLessons', controller.teacherRelated.bindExperimentLessons);
  // 查看班级
  router.get('/api/getClass', controller.teacherRelated.selectClass);
  // 创建班级
  router.post('/api/createClass', controller.teacherRelated.createClass);

};
