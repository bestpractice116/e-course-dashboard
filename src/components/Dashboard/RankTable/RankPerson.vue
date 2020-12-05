<template>
  <div class="flex justify-center items-center p-2 rounded" :style="[index === 0 ? {'boxShadow':'4px 3px 4px 9px rgba(244,244,246,0.71)'} : null]">
    <span class="ml-1.5 font-semibold">{{index+1}}</span>
    <Avatar :src="avatar" size="36" class="ml-6 mr-3" />
    <span class="flex-grow text-textBlue dark:text-gray-300 text-sm xl:text-base" :style="[index === 0 ? {'fontWeight': '700'} : null]">{{name}}</span>
    <div class="font-semibold text-xs xl:text-sm" :style="[index === 0 ? {'background': 'linear-gradient(90deg, rgba(255,217,120,1) 0%, rgba(245,192,60,1) 35%)','padding':'5px 12px','borderRadius':'20px'} : null]">{{point}} points</div>
  </div>
</template>

<script>
import Avatar from "../../Global/Avatar.vue";
export default {
  name: "RankPerson",
  components: {
    Avatar,
  },
  props: {
    avatar: {
      type: String,
      require: true,
    },
    index: {
      type: Number,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    point: {
      type: Number,
      require: true,
    },
  },
};
</script>

<style>
</style>