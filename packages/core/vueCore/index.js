import { useStore } from 'vuex';
import {
  ref, reactive, computed, watch, onMounted, nextTick,
} from 'vue';
import { useRoute, useRouter } from 'vue-router';

export function useCommon() {
  const store = useStore();
  const route = useRoute();
  const router = useRouter();

  const routerName = computed(() => route.name);

  const getState = (module, name) => computed(() => store.state?.[module]?.[name]);
  const getShallowState = (module, name) => store.state?.[module]?.[name];
  const getGetters = (name) => computed(() => store.getters[name]);

  const loadPage = (name, params) => {
    if (params) router.push({ path: name, ...params });
    else if (name.includes('/')) router.push(name);
    else router.push({ name });
  };

  const isDev = () => import.meta.env.MODE === 'development';

  return {
    store, route, router, nextTick, ref, reactive, computed, watch, onMounted, getState, getShallowState, getGetters, routerName, loadPage, isDev,
  };
}
