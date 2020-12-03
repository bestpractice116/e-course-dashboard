<template>
  <div class="flex flex-col">
    <Welcome class="mt-2 xl:mt-0" />
    <h2 class="font-bold text-xl mt-10 xl:mt-14 mb-4">Your Dashboard</h2>
    <Analysis class="h-150 lg:h-80 mb-4" />
    <div class="flex flex-col gap-8 xl:flex-row">
      <Statistic class="w-full xl:w-1/2 h-88" />
      <RankTable class="w-full xl:w-1/2 h-88" />
    </div>
  </div>
</template>

<script>
import Welcome from "../../components/Dashboard/Welcome/Welcome.vue";
import Analysis from "../../components/Dashboard/Analysis/Analysis.vue";
import RankTable from "../../components/Dashboard/RankTable/RankTable.vue";
import Statistic from "../../components/Dashboard/Statistic/Statistic.vue";
export default {
  name: "ViewDashboard",
  components: {
    Welcome,
    Analysis,
    RankTable,
    Statistic,
  },
};
</script>

<style>
</style>