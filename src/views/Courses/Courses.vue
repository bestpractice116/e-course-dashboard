<template>
  <div>
    <h1 class="mb-6 text-center text-lg font-semibold text-textBlue dark:text-gray-100">COURSES</h1>
    <div class="flex flex-col gap-4">
      <Selects/>
      <CourseContainer />
    </div>
  </div>
</template>

<script>
import CourseContainer from "../../components/Courses/CourseContainer.vue";
import Selects from "../../components/Courses/Selects.vue";
export default {
  name: "ViewCourses",
  components: {
    Selects,
    CourseContainer,
  },
};
</script>

<style>
</style>