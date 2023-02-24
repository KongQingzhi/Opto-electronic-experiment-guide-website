//1.引入 createWebHashHistory为Hash模式, createWebHistory为history模式
import { createRouter, createWebHashHistory } from 'vue-router';
// import Home from './Home';
import Show from './show';
import User from './user';
import Home from './home';
//2.创建路由表
const routes:any = [
    {
        path: '/',
        name: 'root',
        redirect: "/show",
    },
    Show,
    User,
    Home
];

//3.创建路由对象
const router = createRouter({
    routes,
    history: createWebHashHistory()
});

//4.导出路由对象
export default router;