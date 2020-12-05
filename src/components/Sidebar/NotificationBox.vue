<template>
  <div class="flex flex-start mb-4">

    <div :class="bgcolor" class="flex justify-center items-center w-12 h-9 rounded-lg">
      <IconDynamic :icon="iconName" :class="iconcolor" />
    </div>

    <div class="ml-4 border-b-2 border-gray-100 w-full">
      <h4 class="font-bold">{{name}}</h4>
      <p class="text-gray-500 dark:text-gray-200 text-sm mt-0.5 mb-2"><span class="font-medium text-black dark:text-white">{{person}}</span> {{message}}</p>
      <slot name="buttons"></slot>
      <p class=" text-gray-600 dark:text-gray-400 text-sm mb-4">{{date}}</p>
    </div>

  </div>
</template>

<script>
import IconDynamic from "../Global/IconDynamic.vue";
export default {
  name: "NotificationBox",
  components: {
    IconDynamic,
  },
  props: {
    name: {
      type: String,
      require: true,
    },
    person: {
      type: String,
      require: true,
    },
    date: {
      type: String,
      require: true,
    },
    message: {
      type: String,
      require: true,
    },
    iconName: {
      type: String,
      require: true,
    },
    bgcolor: {
      type: String,
      require: true,
    },
    iconcolor: {
      type: String,
      require: true,
    },
  },
};
</script>

<style>
</style>