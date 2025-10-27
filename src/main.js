import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'; // or 'bootstrap/dist/js/bootstrap.bundle.min.js' for bundled JS

createApp(App).use(router).mount('#app')
