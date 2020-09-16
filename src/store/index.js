import Vue from "vue";
import Vuex from "vuex";
import Api from "@/api/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: [],
    site: [],
    usage: [],
    invoices: [],
    creditCards: []
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    EDIT_USER(state, user) {
      state.user = user;
    },
    SET_SITE(state, site) {
      state.site = site;
    },
    EDIT_SITE(state, site) {
      state.site = site;
    },
    SET_USAGE(state, usage) {
      state.usage = usage;
    },
    SET_INVOICES(state, invoices) {
      state.invoices = invoices;
    },
    SET_CREDITCARDS(state, creditCards) {
      state.creditCards = creditCards;
    }
  },
  actions: {
    async loadUser({commit}) {
      let res = await Api().get('/user');
      commit("SET_USER", res.data);
    },

    async editUser({commit}, user) {
      let res = await Api().put('/user', user);
      let newUser = res.data;
      commit("EDIT_USER", newUser);
      return newUser;
    },
    async loadSite({commit}) {
      let res = await Api().get('/site');
      commit("SET_SITE", res.data);
    },
    async editSite({commit}, site) {
      let res = await Api().put('/site', site);
      let newSite = res.data;
      commit("EDIT_SITE", newSite);
      return newSite;
    },
    async loadUsage({commit}) {
      let res = await Api().get('/usage');
      commit("SET_USAGE", res.data);
    },
    async loadInvoices({commit}) {
      let res = await Api().get('/invoices');
      commit("SET_INVOICES", res.data);
    },
    async loadCreditCards({commit}) {
      let res = await Api().get('/creditCards');
      commit("SET_CREDITCARDS", res.data);
    }
  }
});
