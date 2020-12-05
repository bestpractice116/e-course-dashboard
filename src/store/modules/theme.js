export default {
  state: {
    theme: {},
  },
  getters: {
    getTheme: function (state) {
      return state.theme
    },
  },
  mutations: {
    SET_THEME(state, theme) {
      state.theme = theme;
      localStorage.theme = theme;
    },
  },
  actions: {
    initTheme({ commit }) {
      const cachedTheme = localStorage.theme ? localStorage.theme : false;
      // `true` if the user has set theme to `dark` on browser/OS
      const userPrefersDark = window.matchMedia('(prefers-color-scheme :dark)').matches;

      if (cachedTheme) {
        commit('SET_THEME', cachedTheme);
      } else if (userPrefersDark) {
        commit('SET_THEME', 'dark');
      } else {
        commit('SET_THEME', 'light');
      }
    },
    toggleTheme({ commit }) {
      if (localStorage.theme === 'light') {
        commit('SET_THEME', 'dark');
      } else {
        commit('SET_THEME', 'light');
      }
    },
  },
}