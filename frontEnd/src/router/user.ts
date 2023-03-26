import UserVue from '../views/user/User.vue';
import LoginVue from '../views/user/login/login.vue';
import llvue from '../views/user/login/1.vue'
import RegisterVue from '../views/user/register/register.vue';
import findPasswordVue from '../views/user/findPassword/findPassword.vue';
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
        },
        {
            path: '/register',
            name: 'register',
            component: RegisterVue
        },
        {
            path: '/findPassword',
            name: 'findPassword',
            component: findPasswordVue
        }
    ]
}

