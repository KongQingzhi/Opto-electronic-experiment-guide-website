import UserVue from '../views/user/User.vue';
import LoginVue from '../views/user/login/Login.vue';
export default {
    path: '/user',
    name: 'user',
    component: UserVue,
    redirect: '/login',
    children: [
        {
            path: '/login',
            name: 'login',
            component: LoginVue
        }
    ]
}

