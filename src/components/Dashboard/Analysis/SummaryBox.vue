<template>
  <div class="flex items-center">

    <div :class="bgcolor" class="flex justify-center items-center w-12 h-10 rounded-lg">
      <IconDynamic :icon="icon" :class="iconcolor" />
    </div>

    <div class="flex flex-col flex-grow ml-3">
      <span class="font-bold text-sm">{{number}}</span>
      <span class="text-gray-500 text-sm">{{name}}</span>
    </div>

    <router-link to="/">
      <IconDynamic icon="arrowRight" />
    </router-link>

  </div>
</template>

<script>
import IconDynamic from "../../Global/IconDynamic.vue";
export default {
  name: "SummaryBox",
  components: {
    IconDynamic,
  },
  props: {
    bgcolor: {
      type: String,
      require: true,
    },
    iconcolor: {
      type: String,
      require: true,
    },
    icon: {
      type: String,
      require: true,
    },
    number: {
      type: Number,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
  },
};
</script>

<style>
</style>