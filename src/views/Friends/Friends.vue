<template>
  <div>
    <h1 class="font-bold text-lg text-center">FRIENDS</h1>
    <h2 class="font-semibold my-2">Comments</h2>
    <Comments />
  </div>
</template>

<script>
import Comments from "../../components/Friends/Comments.vue";
export default {
  name: "ViewFriends",
  components: {
    Comments,
  }
};
</script>

<style>
</style>