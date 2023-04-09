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
  router.post('/api/user/login', controller.loginRelated.login);
  // 检测是否存在账号
  router.post('/api/user/accountExists', controller.loginRelated.accountExists);
  // 注册
  router.post('/api/user/register', controller.loginRelated.register);
  // 验证码
  router.post('/api/user/verify', controller.loginRelated.verify);
  // 找回密码
  router.post('/api/user/retrievePassword', controller.loginRelated.retrievePassword);

  /**
   * 学生有关的接口
   */
  // 查询用户信息
  router.get('/api/students/selectUserInfo', controller.studentRelated.selectUserInfo);
  // 更新信息
  router.post('/api/students/updateUserInfo', controller.studentRelated.updateUserInfo);
  // 绑定班级
  router.post('/api/students/bindClass', controller.studentRelated.bindClass);
  // 查看实验
  router.get('/api/students/selectExperiments', controller.studentRelated.selectExperiments);
  // 查看实验内容
  router.get('/api/students/experimentsContent', controller.studentRelated.experimentsContent);
  // 查看答题
  router.get('/api/students/selectQuestions', controller.studentRelated.selectQuestions);
  // 查看答题内容
  router.get('/api/students/questionsContent', controller.studentRelated.questionsContent);
  // 查看实验成绩
  router.get('/api/students/selectExperimentsScore', controller.studentRelated.selectExperimentsScore);
  // 查看课程成绩
  router.get('/api/students/selectLessonsScore', controller.studentRelated.selectLessonsScore);


  // 查询用户班级
  router.get('/api/students/getClassByStudent', controller.studentRelated.getClassByStudent);
  // 查询是否绑定班级
  router.post('/api/students/selectBindClass', controller.studentRelated.selectBindClass);
  // 查询所有课程
  router.get('/api/students/getAllLessons', controller.studentRelated.getAllLessons);


  /**
   * 教师有关
   */

  // 查看课程是否存在
  router.post('/api/lessonExists', controller.teacherRelated.lessonExists);
  // 添加课程
  router.post('/api/addLessons', controller.teacherRelated.addLessons);
  // 通过班级查找实验
  router.post('/api/selectExperimentsByClass', controller.teacherRelated.selectExperimentsByClass);
  // 查询实验是否存在
  router.post('/api/experimentExists', controller.teacherRelated.experimentExists);
  // 发布实验
  router.post('/api/publishExperiment', controller.teacherRelated.publishExperiment);
  // 查询课程与实验的绑定情况
  router.post('/api/selectELBind', controller.teacherRelated.selectELBind);
  // 实验课程绑定
  router.post('/api/bindExperimentLessons', controller.teacherRelated.bindExperimentLessons);
  // 查看班级
  router.post('/api/selectClass', controller.teacherRelated.selectClass);
  // 创建班级
  router.post('/api/createClass', controller.teacherRelated.createClass);
  // 删除班级
  router.post('/api/deleteClass', controller.teacherRelated.deleteClass);

  /**
   * 公共部分
   */
  // 查询所有班级
  router.get('/api/public/selectAllClass', controller.publicRelated.selectAllClass);
  router.post('/api/public/updateQuestionsContent', controller.publicRelated.updateQuestionsContent);

};
