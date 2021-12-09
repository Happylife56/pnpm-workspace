import { useStore } from 'vuex';
import {
  ref, reactive, computed, watch,
} from 'vue';
import { useRoute, useRouter } from 'vue-router';

export function useCommon() {
  const store = useStore();
  const route = useRoute();
  const router = useRouter();

  const getState = (module, name) => computed(() => store.state?.[module]?.[name]);
  const getGetters = (name) => computed(() => store.getters[name]);

  const loadPage = (name) => {
    router.push(name);
  };

  return {
    store, route, router, ref, reactive, computed, watch, getState, getGetters, loadPage,
  };
}
