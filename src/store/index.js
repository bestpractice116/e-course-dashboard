import Vue from "vue";
import Vuex from "vuex";
import theme from "./modules/theme.js";
import auth from "./modules/auth.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    theme,
    auth,
  },
});