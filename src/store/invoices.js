import Api from "@/api/api";

const invoices = {
  namespaced: true,
  state: {
    invoices: []
  },
  mutations: {
    SET_INVOICES(state, invoices) {
      state.invoices = invoices;
    }
  },
  actions: {
    async loadInvoices({commit}) {
      let res = await Api().get('/invoices');
      commit("SET_INVOICES", res.data);
    }
  }
};
export default invoices;
