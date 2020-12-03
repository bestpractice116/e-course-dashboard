<template>
  <div class="flex flex-col border rounded-lg py-4 px-6">
    <div class="flex justify-between">
      <h2 class="font-semibold">Course Statistics</h2>
      <IconDynamic icon="dots" />
    </div>

    <Donut class="mt-2" />

    <div class="flex justify-between mb-6">
      <div class="flex items-center">
        <p class="w-3 h-3 block bg-pink-500 rounded-full text-pink-500 mr-1"></p>
        <span class="text-sm">Done</span>
      </div>

      <div class="flex items-center">
        <p class="w-3 h-3 block bg-blue-500 rounded-full text-pink-500 mr-1"></p>
        <span class="text-sm">On Progress</span>
      </div>

      <div class="flex items-center">
        <p class="w-3 h-3 block bg-gray-200 rounded-full text-pink-500 mr-1"></p>
        <span class="text-sm">To do</span>
      </div>
    </div>

    <div class="flex justify-between">
      <IconDynamic icon="dots" />
      <div class="flex items-center">
        <span class="font-semibold mr-2 text-sm xl:text-base">Details</span>
        <IconDynamic icon="arrowRight" />
      </div>
    </div>

  </div>
</template>

<script>
import IconDynamic from "../../Global/IconDynamic.vue";
import Donut from "./Donut.vue";
export default {
  name: "DashboardStatistic",
  components: {
    IconDynamic,
    Donut,
  },
};
</script>

<style>
</style>