import { createApp } from 'vue';
import './assets/style/common.css';
import App from './App.vue';
import router from './router';
import axios from 'vue-axios';
createApp(App).use(axios).use(router).mount('#app');
