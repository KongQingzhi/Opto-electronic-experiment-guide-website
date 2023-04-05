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

// import experimentsListVue from "../views/home/ExperimentsList/ExperimentsList.vue";
// import experimentsReleaseVue from "../views/home/ExperimentsRelease/ExperimentsRelease.vue";
// import ExperimentsScoreVue from "../views/home/ExperimentsScore/ExperimentsScore.vue";
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
    ]
}

const teachers = {
    path: 'teachers',
    name: 'teachers',
    component: teachersVue,
    children: [
        {
            path: 'myinfo',
            name: 'myinfo',
            component: myInfoVue
        },
    ]
}

// {
//             path: 'myinfo',
//             name: 'myinfo',
//             component: myinfoVue
//         },
//         {
//             path: 'createClass',
//             name: 'createClass',
//             component: createClass
//         },
//         {
//             path: 'experimentsList',
//             name: 'experimentsList',
//             component: experimentsListVue
//         }, {
//             path: 'experimentsContent',
//             name: 'experimentsContent',
//             component: experimentsContentVue
//         },
//         {
//             path: 'experimentsRelease',
//             name: 'experimentsRelease',
//             component: experimentsReleaseVue
//         },
//         {
//             path: 'experimentsScore',
//             name: 'experimentsScore',
//             component: ExperimentsScoreVue
//         },
export default {
    path: '/home',
    name: 'home',
    component: homeVue,
    children: [
        students,
        teachers
    ]
}

