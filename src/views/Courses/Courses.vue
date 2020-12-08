<template>
  <div>
    <h1 class="mb-6">COURSES</h1>
    <div class="flex gap-4">
      <CustomSelect class="ml-4" />
      <TailwindSelect class="mt-4" />
    </div>

  </div>
</template>

<script>
import CustomSelect from "../../components/Courses/CustomSelect.vue";
import TailwindSelect from "../../components/Courses/TailwindSelect.vue";
export default {
  name: "ViewCourses",
  components: {
    CustomSelect,
    TailwindSelect,
  },
};
</script>

<style>
</style>