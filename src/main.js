import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 重置样式库
import 'normalize.css';
// 项目公用重置样式
import '@/assets/styles/common.less';

createApp(App).use(store).use(router).mount('#app');
