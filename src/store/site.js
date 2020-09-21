import Api from "@/api/api";

const site = {
  namespaced: true,
  state: {
    site: []
  },
  mutations: {
    SET_SITE(state, site) {
      state.site = site;
    },
    EDIT_SITE(state, site) {
      state.site = site;
    }
  },
  actions: {
    async loadSite({commit}) {
      let res = await Api().get('/site');
      commit("SET_SITE", res.data);
    },
    async editSite({commit}, site) {
      let res = await Api().put('/site', site);
      let newSite = res.data;
      commit("EDIT_SITE", newSite);
      return newSite;
    }
  }
};
export default site;
