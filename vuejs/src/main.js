import './assets/common.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';

const app =createApp(App);
app.config.globalProperties.$axios = axios; 
app.config.globalProperties.$serverUrl = 'http://127.0.0.1:8000/api';
app.use(router).mount('#app');
