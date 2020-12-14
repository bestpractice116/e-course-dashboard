<template>
  <div>
    <h1 class="text-red-800 text-center mb-4">Mutlu Yıllar :)</h1>
    <div class="flex flex-col items-center">
      <div class="clip-path w-96 h-60 bg-red-600"></div>
      <div class="h-20 w-4 bg-blue-800"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MutluYillar",
};
</script>

<style scoped>
.clip-path {
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}
</style>