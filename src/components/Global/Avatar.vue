<template>
  <figure>
    <img :src="src" :alt="src" :width="size" :height="size" class="rounded-full">
  </figure>
</template>

<script>
export default {
  name: "Avatar",
  props: {
    src: {
      type: String,
      default: "https://picsum.photos/seed/picsum/80/80",
    },
    alt: {
      type: String,
      default: "Profile",
    },
    size: {
      type: Number,
    },
  },
};
</script>

<style>
</style>