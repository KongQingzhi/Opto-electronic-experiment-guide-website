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

const students = {
    path: 'students',
    name: 'students',
    component: studentsVue,
    children: [
        {
            path: 'myInfo',
            name: 'myInfo',
            component: myInfoVue
        },
        {
            path: 'selectExperiments',
            name: 'selectExperiments',
            component: selectExperimentsVue,
        },
        {
            path: 'experimentsContent',
            name: 'experimentsContent',
            component: experimentsContentVue
        },
        {
            path: 'selectQuestions',
            name: 'selectQuestions',
            component: selectQuestionsVue
        },
        {
            path: 'questionsContent',
            name: 'questionsContent',
            component: questionsContentVue
        },
        {
            path: 'selectExperimentsScore',
            name: 'selectExperimentsScore',
            component: selectExperimentsScoreVue
        },
        {
            path: 'experimentsScoreContent',
            name: 'experimentsScoreContent',
            component: experimentsScoreContentVue
        },
        {
            path: 'selectLessonsScore',
            name: 'selectLessonsScore',
            component: selectLessonsScoreVue
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
            component: CreateClassesVue
        },
        {
            path: 'CreateLessons',
            name: 'CreateLessons',
            component: CreateLessonsVue
        },
         {
            path: 'SelectAllExperiments',
            name: 'SelectAllExperiments',
            component: SelectAllExperimentsVue
        },
          {
            path: 'ReleaseExperiments',
            name: 'ReleaseExperiments',
            component: ReleaseExperimentsVue
        },
          {
            path: 'SelectAllQuestions',
            name: 'SelectAllQuestions',
            component: SelectAllQuestionsVue
        },
          {
            path: 'ReleaseQuestions',
            name: 'ReleaseQuestions',
            component: ReleaseQuestionsVue
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

