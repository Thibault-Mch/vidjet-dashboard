import Vue from "vue";
import Vuex from "vuex";
import Api from "@/api/api";
import userModule from './user';
import siteModule from './site';
import usageModule from './usage';
import invoicesModule from './invoices';
import creditCardsModule from './creditCards';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user: userModule,
    usage: usageModule,
    site: siteModule,
    invoices: invoicesModule,
    creditCards: creditCardsModule
  },

  state: {
    creditCards: []
  },
  mutations: {

  },
  actions: {
    async loadCreditCards({commit}) {
      let res = await Api().get('/creditCards');
      commit("SET_CREDITCARDS", res.data);
    }
  }
});
