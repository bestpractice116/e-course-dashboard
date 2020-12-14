<template>
  <div class="flex items-center bg-gray-50 w-1/4 dark:bg-gray-800 border border-gray-300 rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
    <label for="search" class="py-2 px-2">
      <IconDynamic icon="search" class="text-gray-800 dark:text-gray-300" />
    </label>
    <input id="search" type="text" class="w-full bg-inherit outline-none py-2.5 placeholder-gray-500 dark:placeholder-gray-300 px-2 border-l" placeholder="Search...">
  </div>
</template>
<script>

import IconDynamic from "../Global/IconDynamic.vue";
export default {
  name: "Search",
  components: {
    IconDynamic,
  },

  /*
  <div class="container-filter p-2.5 border-b border-gray-200">
    <input type="text" placeholder="Filter users" v-model.trim="searchText" class="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
  </div>

  */
}
</script>

<style>
</style>