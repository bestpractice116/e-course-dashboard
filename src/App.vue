<template>
  <router-view />
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "App",
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