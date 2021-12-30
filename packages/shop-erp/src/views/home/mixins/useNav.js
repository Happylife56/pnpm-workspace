import { useCommon } from '@common/core';

export function useNav() {
  const {
    ref, watch, store, router, getState, nextTick,
  } = useCommon();

  const backNavList = getState('home', 'backNavList');
  const activeKey = ref('collect');
  watch(() => backNavList.value, () => {
    const { length } = backNavList.value;
    activeKey.value = length ? backNavList.value[length - 1] : 'collect';
  }, { deep: true, immediate: true });

  const setBackNav = ({ key, isDel }) => {
    store.commit('home/setBackNavList', { key, isDel });
    nextTick(() => {
      const pathName = isDel ? activeKey.value : key;
      router.push(pathName);
    });
  };

  return { activeKey, setBackNav };
}
