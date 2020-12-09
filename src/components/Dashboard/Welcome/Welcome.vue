<template>
  <div class="flex justify-between items-center">
    <div class="flex items-center ">
      <Avatar alt="profile" size="50" />
      <div class="flex flex-col ml-5">
        <h2 class="font-bold text-sm md:text-xl mb-0.5">Hey, {{userName}}</h2>
        <p class="text-gray-600 dark:text-gray-300 text-xs w-4/5 md:w-auto md:text-sm">Welcome back, nice to see you again!</p>

      </div>
    </div>
    <DarkMode />
  </div>

</template>

<script>
import Avatar from "../../Global/Avatar.vue";
import DarkMode from "../../Global/DarkMode.vue";
export default {
  name: "DashboardWelcome",
  components: {
    Avatar,
    DarkMode,
  },
  computed: {
    userName() {
      return this.$store.getters.getEmail;
    },
  },
};
</script>

<style scoped>
</style>