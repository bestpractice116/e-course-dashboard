<template>
  <div class="flex flex-col xl:px-4">

    <h2 class="font-semibold text-lg">Friends Rank</h2>

    <div class="text-gray-400 dark:text-gray-300 flex mt-6 mb-4 text-sm xl:text-base">
      <span>No</span>
      <span class="flex-grow ml-19">Name</span>
      <span class="mr-8">Points</span>
    </div>

    <div v-if="showLess" class="animate-pulse" style="animationDelay:1000ms; animationFillMode:'backwards';">
      <div v-for="(person,index) in ranks" :key="index">
        <template v-if="index < 3">
          <RankPerson class="mb-6" :avatar="person.avatar" :index="index" :name="person.name" :point="person.point" />
        </template>
      </div>
    </div>

    <div v-else class="animate-pulse" style="animationDelay:1000ms; animationFillMode:'backwards';">
      <div v-for="(person,index2) in ranks" :key="index2">
        <RankPerson class="mb-6" :avatar="person.avatar" :index="index2" :name="person.name" :point="person.point" />
      </div>
    </div>

    <button @click="showLess = true" class="text-linkBlue font-semibold py-0.5 focus:outline-none">See All Rank</button>

  </div>
</template>

<script>
import { ranks } from "./ranks.js";

import RankPerson from "./RankPerson.vue";
export default {
  name: "DashboardRankTable",
  mixins: [ranks],
  components: {
    RankPerson,
  },
  data() {
    return {
      showLess: true,
    };
  },
};
</script>

<style>
</style>