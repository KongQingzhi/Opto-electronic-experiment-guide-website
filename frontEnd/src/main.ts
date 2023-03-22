import { createApp } from 'vue';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue';
import router from './router';
import axios from 'vue-axios';
createApp(App).use(router).use(axios).use(ElementPlus).mount('#app');
