<template>
  <div>
    <router-link to="/course">
      <img :src="photo" :alt="courseName">
    </router-link>

    <div class="p-2">
      <router-link to="/course">
        <h2 class="font-semibold text-lg">{{courseName}}</h2>
      </router-link>

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

<style scoped>
.image {
}
</style>