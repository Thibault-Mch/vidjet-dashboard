import Vue from "vue";
import Vuex from "vuex";
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
  }
});
