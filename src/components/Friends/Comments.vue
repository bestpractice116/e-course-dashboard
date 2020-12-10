<template>
  <div class="divide-y divide-gray-200">

    <template v-if="!fetchedData">
      <div class="py-4">
        <div class="animate-pulse">
          <SkeletonComment type="long" />
        </div>
      </div>

      <div class="py-4">
        <div class="animate-pulse animate-2">
          <SkeletonComment type="long" />
        </div>
      </div>

      <div class="py-4">
        <div class="animate-pulse animate-3">
          <SkeletonComment type="short" />
        </div>
      </div>

      <div class="py-4">
        <div class="animate-pulse animate-4">
          <SkeletonComment type="long" />
        </div>
      </div>
    </template>

    <template v-if="fetchedData">
      <div v-for="(comment,index) in comments" :key="index" class="py-4 w-full">
        <CommentBox :photo="comment.photo" :name="comment.name" :message="comment.message" :date="comment.date" />
      </div>
    </template>

  </div>
</template>

<script>
import SkeletonComment from "./SkeletonComment.vue";
import CommentBox from "./CommentBox.vue";
export default {
  name: "Comments",
  components: {
    SkeletonComment,
    CommentBox,
  },
  data() {
    return {
      comments: [
        {
          photo: "https://pbs.twimg.com/profile_images/1260188387820134407/Eq1Fb2Yy_400x400.jpg",
          name: "Johnny Deep",
          message: "Good Content",
          date: "22 December",
        },
        {
          photo: "https://pbs.twimg.com/profile_images/1260188387820134407/Eq1Fb2Yy_400x400.jpg",
          name: "Harvey Specter",
          message: "You have to more better",
          date: "10 October",
        },
        {
          photo: "https://pbs.twimg.com/profile_images/1260188387820134407/Eq1Fb2Yy_400x400.jpg",
          name: "Louis Litt",
          message: "This is disgusting",
          date: "18 January",
        },
        {
          photo: "https://pbs.twimg.com/profile_images/1260188387820134407/Eq1Fb2Yy_400x400.jpg",
          name: "Donna Specter",
          message: "Oh cool",
          date: "08 July",
        },
        {
          photo: "https://pbs.twimg.com/profile_images/1260188387820134407/Eq1Fb2Yy_400x400.jpg",
          name: "Mertcan Kose",
          message: "Incredible course i have ever seen!",
          date: "16 June",
        },
        {
          photo: "https://pbs.twimg.com/profile_images/1260188387820134407/Eq1Fb2Yy_400x400.jpg",
          name: "Mike Ross",
          message: "Hey this is amazing content!",
          date: "29 April",
        },
        {
          photo: "https://pbs.twimg.com/profile_images/1260188387820134407/Eq1Fb2Yy_400x400.jpg",
          name: "Mertcan Kose",
          message: "Incredible course i have ever seen!",
          date: "16 June",
        }
      ],
      fetchedData: false,
    }
  },
  created() {
    setTimeout(() => {
      this.fetchedData = true;
    }, 3500)
  },
}
</script>

<style scoped>
.animate-2 {
  animation-delay: 150ms;
  animation-fill-mode: backwards;
}
.animate-3 {
  animation-delay: 300ms;
  animation-fill-mode: backwards;
}
.animate-4 {
  animation-delay: 450ms;
  animation-fill-mode: backwards;
}
</style>