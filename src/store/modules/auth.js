import axios from "axios";
import router from "../../router/index.js";

export default {
  state: {
    token: "",
    firebaseAPIKey: "AIzaSyD94dCgyfL6jw8cVXHLGliW4eMcmCHwqGM",
    email: "",
  },

  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    clearToken(state) {
      state.token = "";
    },
    setEmail(state, email) {
      state.email = email;
    }
  },

  actions: {
    initAuth({ commit, dispatch }) {
      let token = localStorage.getItem("token");

      if (token) {
        let expirationDate = localStorage.getItem("expirationDate");
        let time = new Date().getTime();

        if (time >= +expirationDate) {
          dispatch("logout");
        } else {
          commit("setToken", token);
          let timerSecond = +expirationDate - time;


          dispatch("setTimeoutTimer", timerSecond);
          router.push("/");
        }
      } else {
        // router.push("signup");
      }

      let email = localStorage.getItem("email");
      if (email) {
        commit("setEmail", email);
      } else {
        return;
      }
    },

    register({ commit, dispatch, state }, authData) {
      axios
        .post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + state.firebaseAPIKey,
          {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true,
          }
        )
        .then((response) => {
          console.log(response);
          router.push({ path: "signin" });
        });
    },
    login({ commit, dispatch, state }, authData) {
      return new Promise((resolve, reject) => {
        axios
          .post(
            "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + state.firebaseAPIKey,
            {
              email: authData.email,
              password: authData.password,
              returnSecureToken: true,
            }
          )
          .then((response) => {
            resolve(response);

            commit("setToken", response.data.idToken);
            localStorage.setItem("token", response.data.idToken);

            commit("setEmail", response.data.email);
            localStorage.setItem("email", response.data.email);

            localStorage.setItem("expirationDate", new Date().getTime() + +response.data.expiresIn * 1000);
            // localStorage.setItem("expirationDate", new Date().getTime() + 10000);

            dispatch("setTimeoutTimer", +response.data.expiresIn * 1000); // send 3600s
            // dispatch("setTimeoutTimer", 10000);

            router.push({ path: "/" });
          })
          .catch((e) => {
            reject(e.response.data.errors);
          });
      })
    },
    logout({ commit }) {
      commit("clearToken");
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      localStorage.removeItem("expirationDate");

      router.push("/signin");
    },
    // 15 sn sonra logout ol
    setTimeoutTimer({ dispatch }, expiresIn) {
      setTimeout(() => {
        dispatch("logout");
      }, expiresIn)
    }
  },
  getters: {
    isAuthenticated(state) {
      return state.token !== "";
    },
    getEmail(state) {
      return state.email;
    }
  },
}