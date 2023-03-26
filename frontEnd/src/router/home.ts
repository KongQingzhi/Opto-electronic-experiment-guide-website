import homeVue from "../views/home/home.vue"
import myinfoVue from "../views/home/myinfo.vue"
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
        // {
        //     path: '/findPassword',
        //     name: 'findPassword',
        //     component: findPasswordVue
        // }
    ]
}

