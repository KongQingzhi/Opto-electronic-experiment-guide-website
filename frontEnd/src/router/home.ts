import homeVue from "../views/home/Index/Home.vue";
import studentsVue from "../views/home/Students/Index.vue";
import teachersVue from "../views/home/Teachers/Index.vue";

import myInfoVue from "../views/home/Students/MyInfo/MyInfo.vue";
import selectExperimentsVue from "../views/home/Students/SelectExperiments/SelectExperiments.vue";
import experimentsContentVue from "../views/home/Students/SelectExperiments/ExperimentsContent.vue";
import selectQuestionsVue from "../views/home/Students/SelectQuestions/SelectQuestions.vue";
import questionsContentVue from "../views/home/Students/SelectQuestions/QuestionsContent.vue"
import selectExperimentsScoreVue from "../views/home/Students/SelectExperimentsScore/SelectExperimentsScore.vue"
import experimentsScoreContentVue from "../views/home/Students/SelectExperimentsScore/ExperimentsScoreContent.vue";
import selectLessonsScoreVue from "../views/home/Students/SelectLessonsScore/SelectLessonsScore.vue";

import CreateClassesVue from "../views/home/Teachers/CreateClasses/CreateClasses.vue";
import CreateLessonsVue from "../views/home/Teachers/CreateLessons/CreateLessons.vue";
import SelectAllExperimentsVue from "../views/home/Teachers/SelectExeriments/SelectExperiments.vue";
import ReleaseExperimentsVue from "../views/home/Teachers/ReleaseExperiments/ReleaseExperiments.vue";
import SelectAllQuestionsVue from "../views/home/Teachers/SelectQuestions/SelectQuestions.vue";
import ReleaseQuestionsVue from "../views/home/Teachers/ReleaseQuestions/ReleaseQuestions.vue";
import BindRelateVue from "../views/home/Teachers/BindRelate/BindRelate.vue";
import BindClassAndLessonVue from "../views/home/Teachers/BindRelate/BindClassAndLesson.vue";
import BindExperimentLessonVue from "../views/home/Teachers/BindRelate/BindExperimentLesson.vue";
import BindTeacherAndLessonVue from "../views/home/Teachers/BindRelate/BindTeacherAndLesson.vue";
import ExperiementsScoreVue from "../views/home/Teachers/ExperimentsScore.vue/ExperimentsScore.vue"
import QuestionsScoreVue from "../views/home/Teachers/QuestionsScore/QuestionScore.vue"
import QuestionsScoreContentVue from "../views/home/Teachers/QuestionsScore/QuestionScoreContent.vue";
const students = {
    path: 'students',
    name: 'students',
    component: studentsVue,
    children: [
        {
            path: 'myInfo',
            name: 'myInfo',
            component: myInfoVue,
            meta: {
                title: '我的信息',
                role: 0
            }
        },
        {
            path: 'selectExperiments',
            name: 'selectExperiments',
            component: selectExperimentsVue,
            meta: {
                title: '查询实验',
                role: 0
            }
        },
        {
            path: 'experimentsContent',
            name: 'experimentsContent',
            component: experimentsContentVue,
        },
        {
            path: 'selectQuestions',
            name: 'selectQuestions',
            component: selectQuestionsVue,
            meta: {
                title: '查询试题',
                role: 0
            }
        },
        {
            path: 'questionsContent',
            name: 'questionsContent',
            component: questionsContentVue,
        },
        {
            path: 'selectExperimentsScore',
            name: 'selectExperimentsScore',
            component: selectExperimentsScoreVue,
            meta: {
                title: '实验成绩',
                role: 0
            }
        },
        {
            path: 'experimentsScoreContent',
            name: 'experimentsScoreContent',
            component: experimentsScoreContentVue,
        },
        {
            path: 'selectLessonsScore',
            name: 'selectLessonsScore',
            component: selectLessonsScoreVue,
            meta: {
                title: '课程成绩',
                role: 0
            }
        },
    ]
}

const teachers = {
    path: 'teachers',
    name: 'teachers',
    component: teachersVue,
    children: [
        {
            path: 'CreateClasses',
            name: 'CreateClasses',
            component: CreateClassesVue,
            meta: {
                title: '创建班级',
                role: 1
            }
        },
        {
            path: 'CreateLessons',
            name: 'CreateLessons',
            component: CreateLessonsVue,
            meta: {
                title: '创建课程',
                role: 1
            }
        },
        {
            path: 'SelectAllExperiments',
            name: 'SelectAllExperiments',
            component: SelectAllExperimentsVue,
            meta: {
                title: '查看实验',
                role: 1
            }
        },
        {
            path: 'ReleaseExperiments',
            name: 'ReleaseExperiments',
            component: ReleaseExperimentsVue,
            meta: {
                title: '发布实验',
                role: 1
            }
        },
        {
            path: 'SelectAllQuestions',
            name: 'SelectAllQuestions',
            component: SelectAllQuestionsVue,
            meta: {
                title: '查看试题',
                role: 1
            }
        },
        {
            path: 'ReleaseQuestions',
            name: 'ReleaseQuestions',
            component: ReleaseQuestionsVue,
            meta: {
                title: '发布试题',
                role: 1
            }
        },
        {
            path: 'BindRelate',
            name: 'BindRelate',
            component: BindRelateVue,
            meta: {
                title: '绑定相关',
                role: 1
            }
        },
        {
            path: 'BindClassAndLesson',
            name: 'BindClassAndLesson',
            component: BindClassAndLessonVue,
        },
        {
            path: 'BindExperimentLesson',
            name: 'BindExperimentLesson',
            component: BindExperimentLessonVue,
        },
        {
            path: 'BindTeacherAndLesson',
            name: 'BindTeacherAndLesson',
            component: BindTeacherAndLessonVue,
        },
        {
            path: 'ExperiementsScore',
            name: 'ExperiementsScore',
            component: ExperiementsScoreVue,
            meta: {
                title: '实验评分',
                role: 1
            }
        },
        {
            path: 'QuestionsScore',
            name: 'QuestionsScore',
            component: QuestionsScoreVue,
            meta: {
                title: '试题评分',
                role: 1
            }
        },{
            path: 'QuestionsScoreContent',
            name: 'QuestionsScoreContent',
            component: QuestionsScoreContentVue,
        },
    ]
}
export default {
    path: '/home',
    name: 'home',
    component: homeVue,
    children: [
        students,
        teachers,
    ]
}

