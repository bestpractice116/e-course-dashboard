<template>
  <div class="h-full grid grid-cols-appsmall 2xl:grid-cols-appbig">
    <Navigation class="min-h-screen" />

    <div class="p-4 lg:p-10">
      <router-view />
    </div>

    <Sidebar class="min-h-screen hidden 2xl:block border-l border-purple-100" />
  </div>
</template>

<script>
import Navigation from "./components/Navigation/Navigation.vue";
import Sidebar from "./components/Sidebar/Sidebar.vue";

export default {
  name: "App",
  components: {
    Navigation,
    Sidebar,
  },
};
</script>