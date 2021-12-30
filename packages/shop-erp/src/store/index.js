import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

const routesModules = import.meta.globEager('../views/**/store/*.js');
const modules = {};
Object.keys(routesModules).forEach((key) => {
  const moduleName = key.split('/')[2];
  modules[moduleName] = {
    ...routesModules[key].default,
  };
});

const store = createStore({
  modules,
  plugins: [
    createPersistedState({
      storage: window.sessionStorage, // 修改存储的状态
    }),
  ], // 状态持久化
});

export default store;
