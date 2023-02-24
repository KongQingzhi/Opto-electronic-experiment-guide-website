import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'vue-axios';
createApp(App).use(router).use(axios).mount('#app');
