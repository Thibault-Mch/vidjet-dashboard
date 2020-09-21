import Api from "@/api/api";

const usage = {
  namespaced: true,
  state: {
    usage: []
  },
  mutations: {
     SET_USAGE(state, usage) {
      state.usage = usage;
    }
  },
  actions: {
     async loadUsage({commit}) {
      let res = await Api().get('/usage');
      commit("SET_USAGE", res.data);
    }
  }
};
export default usage;
