<template>
  <div class="h-full grid grid-cols-appsmall 2xl:grid-cols-appbig text-black dark:text-white bg-white dark:bg-gray-900">
    <Navigation class="sticky top-0 h-screen overflow-auto" />

    <main class="p-4 lg:p-8">
      <router-view />
    </main>

    <Sidebar class="min-h-screen hidden 2xl:block border-l border-purple-100" />
  </div>
</template>

<script>
import Navigation from "./components/Navigation/Navigation.vue";
import Sidebar from "./components/Sidebar/Sidebar.vue";
import { mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    Navigation,
    Sidebar,
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