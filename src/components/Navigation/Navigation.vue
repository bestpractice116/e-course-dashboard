<template>
  <div class="flex flex-col bg-gradient-to-b from-navigationGray to-navigationPurple dark:from-gray-800 dark:to-gray-900 ">

    <div class="px-2 mb-10 mt-10 xl:px-8">
      <router-link to="/" exact class="flex justify-center xl:justify-start items-center py-1 xl:py-3 px-2 xl:px-6 text-logoblue font-semibold">
        <IconDynamic icon="logo" />
        <span class="text-xl m-2 hidden xl:block">Bandrek.id</span>
      </router-link>
    </div>

    <div class="flex flex-col justify-between h-full px-2 xl:px-8">

      <div class="text-gray-400">
        <router-link v-for="(item,index) in items" :key="index" :to="{name:item.name}" exact class="flex items-center justify-center xl:justify-start mb-4 font-medium py-1 px-2 xl:py-3 xl:px-6" active-class="text-black dark:text-gray-200 bg-white dark:bg-black rounded-md">
          <IconDynamic :icon="item.icon" />
          <span class="ml-2 hidden xl:block">{{item.name}}</span>
        </router-link>
      </div>

      <div class="mb-8">
        <a @click.prevent="logout" href="#" class="flex items-center justify-center xl:justify-start font-medium py-1 px-2 xl:py-3 xl:px-6 text-navGray">
          <IconDynamic icon="logout" />
          <span class="ml-2 hidden xl:block">Logout</span>
        </a>
      </div>

    </div>

  </div>
</template>

<script>
import IconDynamic from "../Global/IconDynamic.vue";
import { items } from "./items.js";
export default {
  name: "Navigation",
  mixins: [items],
  components: {
    IconDynamic,
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style scoped>
</style>