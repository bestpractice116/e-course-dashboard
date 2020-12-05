<template>
  <div class="border rounded-lg block lg:flex p-6">

    <div class="w-auto lg:w-3/4">
      <Graph class="min-h-10" />
    </div>

    <div class="flex flex-col justify-center w-auto py-6 lg:py-0 lg:w-1/4 px-6 rounded-lg bg-summarybg dark:bg-gray-800">

      <div class="flex justify-between mb-8">
        <h2 class="font-bold">Summary</h2>
        <router-link to="/">
          <IconDynamic icon="dots" />
        </router-link>

      </div>

      <div class="flex flex-col" v-for="(item,index) in summary" :key="index">
        <div v-if="item.type === 'month'">
          <SummaryBox bgcolor="bg-pink-100" iconcolor="text-pink-400" icon="courses" :number="item.course" name="Courses" class="mb-6" />
          <SummaryBox bgcolor="bg-blue-100" iconcolor="text-blue-400" icon="time" :number="item.time" name="Total time" class="mb-6" />
          <SummaryBox bgcolor="bg-purple-100" iconcolor="text-purple-400" icon="examsummary" :number="item.exam" name="Exams" />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { summary } from "./summary.js";
import IconDynamic from "../../Global/IconDynamic.vue";
import Graph from "./Graph.vue";
import SummaryBox from "./SummaryBox.vue";

export default {
  name: "ApexGraph",
  mixins: [summary],
  components: {
    IconDynamic,
    SummaryBox,
    Graph,
  },
};
</script>

<style>
</style>