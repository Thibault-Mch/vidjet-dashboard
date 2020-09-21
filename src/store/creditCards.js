import Api from "@/api/api";

const creditCards = {
  namespaced: true,
  state: {
    creditCards: []
  },
  mutations: {
    SET_CREDITCARDS(state, creditCards) {
      state.creditCards = creditCards;
    }
  },
  actions: {
    async loadCreditCards({commit}) {
      let res = await Api().get('/creditCards');
      commit("SET_CREDITCARDS", res.data);
    }
  }
};
export default creditCards;
