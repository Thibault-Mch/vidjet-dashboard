import Api from "@/api/api";

const user = {
  namespaced: true,
  state: {
    user: []
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    EDIT_USER(state, user) {
      state.user = user;
    }
  },
  actions: {
    async editUser({commit}, user) {
      let res = await Api().put('/user', user);
      let newUser = res.data;
      commit("EDIT_USER", newUser);
      return newUser;
    },
    async loadUser({commit}) {
      let res = await Api().get('/user');
      commit("SET_USER", res.data);
    }
  }
};
export default user;
