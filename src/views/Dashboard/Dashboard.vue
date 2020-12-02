<template>
  <div class="flex flex-col">
    <Welcome />
    <h2 class="font-bold text-xl mt-14 mb-8">Your Dashboard</h2>
    <Graph class="h-120 lg:h-80 mb-8" />
    <div class="flex flex-col gap-4 xl:flex-row">
      <RankTable class="w-full h-80 xl:w-1/2" />
      <Statistic class="w-full h-80 xl:w-1/2" />
    </div>
  </div>
</template>

<script>
import Welcome from "../../components/Dashboard/Welcome/Welcome.vue";
import Graph from "../../components/Dashboard/Graph/Graph.vue";
import RankTable from "../../components/Dashboard/RankTable/RankTable.vue";
import Statistic from "../../components/Dashboard/Statistic/Statistic.vue";
export default {
  name: "ViewDashboard",
  components: {
    Welcome,
    Graph,
    RankTable,
    Statistic,
  },
};
</script>

<style>
</style>