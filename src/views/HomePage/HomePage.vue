<template>
  <div class="h-full grid grid-cols-appsmall 2xl:grid-cols-appbig text-black dark:text-white bg-white dark:bg-gray-900">
    <Navigation class="sticky top-0 h-screen overflow-auto" />

    <main class="p-4 lg:p-8">
      <router-view></router-view>
    </main>

    <Sidebar class="h-screen sticky top-0 hidden 2xl:block border-l border-purple-100" />
  </div>
</template>

<script>
import Navigation from "../../components/Navigation/Navigation.vue";
import Sidebar from "../../components/Sidebar/Sidebar.vue";
export default {
  name: "HomePage",
  components: {
    Navigation,
    Sidebar,
  },
};
</script>

<style>
</style>