const SET_HEADER_TABS_LIST = 'setHeaderTabsList';
const SET_BACK_NAV_LIST = 'setBackNavList';
const state = {
  headerTabsList: [{ title: '前台', name: 'collect' }, { title: '订单', name: 'order' }],
  backNavList: [],
};
const mutations = {
  [SET_HEADER_TABS_LIST](state, obj) {
    const { isDel, name } = obj;
    if (isDel) state.headerTabsList = state.headerTabsList.filter((item) => item.name !== name);
    else state.headerTabsList.push(obj);
  },
  [SET_BACK_NAV_LIST](state, { key, isDel }) {
    const isHas = state.backNavList.some((item) => item === key);
    if (isHas) state.backNavList = state.backNavList.filter((item) => item !== key);
    if (!isDel) state.backNavList.push(key);
  },
};
const getters = {};
const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
