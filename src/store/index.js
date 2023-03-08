import Vuex from "vuex";
import axios from "axios";

export default new Vuex.Store({
  state: {
    message: "",
  },
  getters: {
    getMessage: (state) => () => {
      console.log(state.message);
      return state.message;
    },
  },
  mutations: {
    setMessage(state, payload) {
      console.log(payload.message)
      state.message = payload.message;
    },
  },
  actions: {
    async getMessageAction({ state, commit }) {
      const msg = await axios
        .get("http://localhost:8002/items")
        .then(
          (res) => res.data
          // () => ""
        )
        .catch((error) => {
          state.errorMsg = error.message;
        });
      const payload = {
        message: msg,
      };

      // console.log(payload)
      commit("setMessage", payload);
    },
  },
});
