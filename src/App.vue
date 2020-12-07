<template>
  <router-view />
</template>

<script>
// import SignUp from "./components/Sign/SignUp.vue";
// import SignIn from "./components/Sign/SignIn.vue";
import { mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    // SignUp,
    // SignIn,
  },
  created() {
    // initAuth
    this.$store.dispatch("initAuth");
  },
  beforeMount() {
    this.$store.dispatch("initTheme");
  },
  computed: {
    ...mapGetters({ theme: "getTheme" }),
  },
  watch: {
    theme(newTheme, oldTheme) {
      newTheme === "light"
        ? document.querySelector("html").classList.remove("dark")
        : document.querySelector("html").classList.add("dark");
    },
  },
};
</script>

<style>
</style>