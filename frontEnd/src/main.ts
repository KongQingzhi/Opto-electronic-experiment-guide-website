import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'vue-axios';
// import iView from 'iview';
// createApp(App).use(router).use(iView).use(axios).mount('#app');
createApp(App).use(router).use(axios).mount('#app');
