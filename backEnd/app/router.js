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
  // 更新信息
  router.post('/api/students/updateUserInfo', controller.studentRelated.updateUserInfo);
  // 绑定班级
  // router.post('/api/students/bindClass', controller.studentRelated.bindClass);
  // 查看实验
  router.get('/api/students/selectExperiments', controller.studentRelated.selectExperiments);
  // 查看实验内容
  router.get('/api/students/experimentsContent', controller.studentRelated.experimentsContent);
  // 查看答题
  router.get('/api/students/selectQuestions', controller.studentRelated.selectQuestions);
  // 查看答题内容
  router.get('/api/students/questionsContent', controller.studentRelated.questionsContent);
  // 答题
  router.post('/api/students/replyQuestions', controller.studentRelated.replyQuestions);
  // 查看实验成绩
  router.get('/api/students/selectExperimentsScore', controller.studentRelated.selectExperimentsScore);
  // 查看课程成绩
  router.get('/api/students/selectLessonsScore', controller.studentRelated.selectLessonsScore);

  // 暂定
  // 查询用户班级
  router.get('/api/students/getClassByStudent', controller.studentRelated.getClassByStudent);
  // 查询是否绑定班级
  router.post('/api/students/selectBindClass', controller.studentRelated.selectBindClass);
  // 查询所有课程
  router.get('/api/students/getAllLessons', controller.studentRelated.getAllLessons);


  /**
   * 教师有关
   */
  // 查看班级是否存在
  router.post('/api/teachers/selectClassExists', controller.teacherRelated.selectClassExists);
  // 创建班级
  router.post('/api/teachers/createClass', controller.teacherRelated.createClass);
  // 删除班级
  router.post('/api/teachers/deleteClass', controller.teacherRelated.deleteClass);
  // 查看课程是否存在
  router.post('/api/teachers/selectLessonExists', controller.teacherRelated.selectLessonExists);
  // 添加课程
  router.post('/api/teachers/createLesson', controller.teacherRelated.createLesson);
  // 删除课程
  router.post('/api/teachers/deleteLesson', controller.teacherRelated.deleteLesson);
  // 查询班级与课程是否绑定
  router.post('/api/teachers/isbindClassAndLesson', controller.teacherRelated.isbindClassAndLesson);
  // 绑定班级与课程
  router.post('/api/teachers/bindClassAndLesson', controller.teacherRelated.bindClassAndLesson);
  // 查询教师与课程是否绑定
  router.post('/api/teachers/isbindTeacherAndLesson', controller.teacherRelated.isbindTeacherAndLesson);
  // 绑定教师与课程
  router.post('/api/teachers/bindTeacherAndLesson', controller.teacherRelated.bindTeacherAndLesson);
  // 查询实验是否存在
  router.post('/api/teachers/experimentExists', controller.teacherRelated.experimentExists);
  // 发布实验
  router.post('/api/teachers/releaseExperiment', controller.teacherRelated.releaseExperiment);
  // 删除实验
  router.post('/api/teachers/deleteExperiment', controller.teacherRelated.deleteExperiment);
  // 查询课程绑定是否存在
  router.post('/api/teachers/isbindExperimentLesson', controller.teacherRelated.isbindExperimentLesson);
  // 实验课程绑定
  router.post('/api/teachers/bindExperimentLesson', controller.teacherRelated.bindExperimentLesson);
  // 发布试题
  router.post('/api/teachers/releaseQuestion', controller.teacherRelated.releaseQuestion);
  // 删除试题
  router.post('/api/teachers/deleteQuestion', controller.teacherRelated.deleteQuestion);
  // 试题评分
  router.post('/api/teachers/questionScoring', controller.teacherRelated.questionScoring);
  // 实验评分
  router.post('/api/teachers/experimentScoring', controller.teacherRelated.experimentScoring);
  // 删除班级与课程
  router.post('/api/teachers/deleteClassAndLesson', controller.teacherRelated.deleteClassAndLesson);
  // 删除课程与教师
  router.post('/api/teachers/deleteLessonAndTeacher', controller.teacherRelated.deleteLessonAndTeacher);
  // 删除实验与课程
  router.post('/api/teachers/deleteLessonAndExperiment', controller.teacherRelated.deleteLessonAndExperiment);


  // --------------
  // 通过班级查找实验
  router.post('/api/teachers/selectExperimentsByClass', controller.teacherRelated.selectExperimentsByClass);
  // 查询课程与实验的绑定情况
  router.post('/api/teachers/selectELBind', controller.teacherRelated.selectELBind);

  /**
   * 公共部分
   */
  // 查询用户信息
  router.get('/api/public/selectUserInfo', controller.publicRelated.selectUserInfo);
  // 更新答题
  router.post('/api/public/updateQuestionsContent', controller.publicRelated.updateQuestionsContent);

  // 查询所有班级
  router.get('/api/public/selectAllClass', controller.publicRelated.selectAllClass);
  // 查询所有课程
  router.get('/api/public/selectAllLesson', controller.publicRelated.selectAllLesson);
  // 查询所有教室
  router.get('/api/public/selectAllRooms', controller.publicRelated.selectAllRooms);
  // 查询所有实验
  router.get('/api/public/selectAllExperiments', controller.publicRelated.selectAllExperiments);
  // 查询所有试题
  router.get('/api/public/selectAllQuestions', controller.publicRelated.selectAllQuestions);
  // 查询所有教师
  router.get('/api/public/selectAllTeachers', controller.publicRelated.selectAllTeachers);
  // 查询班级与课程
  router.get('/api/public/selectClassAndLesson', controller.publicRelated.selectClassAndLesson);
  // 查询课程与教师
  router.get('/api/public/selectLessonAndTeacher', controller.publicRelated.selectLessonAndTeacher);
  // 查询实验与课程
  router.get('/api/public/selectLessonAndExperiment', controller.publicRelated.selectLessonAndExperiment);


};
