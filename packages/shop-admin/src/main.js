import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import { KButton } from '@common/components';
import router from './router';
import store from './store';
import App from './App.vue';
import 'element-plus/lib/theme-chalk/index.css';

createApp(App).use(router).use(store).use(ElementPlus)
  .use(KButton)
  .mount('#app');
