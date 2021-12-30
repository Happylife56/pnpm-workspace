import { createApp } from 'vue';
import KUI from '@common/components';
import router from './router';
import store from './store';
import App from './App.vue';
import './styles/normalize.css';
import './assets/iconfont/iconfont.css';

createApp(App).use(router).use(store)
  .use(KUI)
  .mount('#app');
