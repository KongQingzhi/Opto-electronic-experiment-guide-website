import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import * as echarts from "echarts";
import 'element-plus/dist/index.css'
import App from './App.vue';
import router from './router';
const app = createApp(App);
app.config.globalProperties.$echarts = echarts;
app.use(router);
app.use(ElementPlus);
app.mount('#app');
