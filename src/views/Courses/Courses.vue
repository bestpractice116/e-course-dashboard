<template>
  <div class="z-0">
    <h1 class="mb-6 text-center text-lg font-semibold text-textBlue dark:text-gray-100">COURSES</h1>
    <CourseContainer />
  </div>
</template>

<script>
import CourseContainer from "../../components/Courses/CourseContainer.vue";
export default {
  name: "ViewCourses",
  components: {
    CourseContainer,
  },
};
</script>

<style>
</style>