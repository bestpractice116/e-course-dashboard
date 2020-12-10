<template>
  <div>
    <img :src="photo" :alt="courseName">
    <div class="p-2">
      <h2 class="font-semibold text-lg">{{courseName}}</h2>
      <p class="text-gray-800 dark:text-gray-100">{{courseDescription}}</p>
      <p>{{teacherName}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CourseBox",
  props: {
    photo: {
      type: String,
      require: true,
    },
    courseName: {
      type: String,
      require: true,
    },
    courseDescription: {
      type: String,
      require: true,
    },
    teacherName: {
      type: String,
      require: true,
    }
  },
}
</script>

<style>
</style>