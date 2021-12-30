const SET_PAT_SHOP_ID = 'setPayShopId';
// state
const state = {
  payShopId: '',
};
// mutations
const mutations = {
  [SET_PAT_SHOP_ID](state, data) {
    state.payShopId = data;
  },
};
// getters
const getters = {};
// actions
const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
