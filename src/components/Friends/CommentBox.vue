<template>
  <div class="flex items-center">
    <Avatar :src="photo" :alt="name" size="46" />
    <div class="ml-4 flex flex-col">
      <h2 class="font-semibold">{{name}} <span class="ml-4 text-xs text-gray-400">{{date}}</span></h2>
      <p>{{message}}</p>
    </div>
  </div>
</template>

<script>
import Avatar from "../Global/Avatar.vue";
export default {
  name: "CourseBox",
  components: {
    Avatar,
  },
  props: {
    photo: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    message: {
      type: String,
      require: true,
    },
    date: {
      type: String,
      require: true,
    }
  }
}
</script>

<style>
</style>