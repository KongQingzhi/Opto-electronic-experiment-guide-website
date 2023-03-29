import homeVue from "../views/home/home.vue"
import myinfoVue from "../views/home/MyInfo/MyInfo.vue"
import createClass from "../views/home/CreateClass/CreateClass.vue";
import experimentsListVue from "../views/home/ExperimentsList/ExperimentsList.vue";
import experimentsContentVue from "../views/home/ExperimentsContent/ExperimentsContent.vue";
export default {
    path: '/home',
    name: 'home',
    component: homeVue,
    children: [
        {
            path: 'myinfo',
            name: 'myinfo',
            component: myinfoVue
        },
        {
            path: 'createClass',
            name: 'createClass',
            component: createClass
        },
        {
            path: 'experimentsList',
            name: 'experimentsList',
            component: experimentsListVue
        }, {
            path: 'experimentsContent',
            name: 'experimentsContent',
            component: experimentsContentVue
        },
    ]
}

