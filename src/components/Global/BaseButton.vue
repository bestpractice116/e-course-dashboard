<template>
  <button class="text-white" :class="color">
    <router-link to="/">
      <slot />
    </router-link>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    color: {
      type: String,
      default: "positive",
      validator: function (value) {
        return ["positive", "negative"].indexOf(value) !== -1;
      },
    },
  },
};
</script>

<style scoped>
.positive {
  background: rgb(97, 179, 255);
  background: linear-gradient(
    90deg,
    rgb(138, 194, 247) 0%,
    rgba(67, 156, 240, 1) 100%
  );
  color: #fff;
  font-weight: 500;
}
.negative {
  background-color: #f5f6fa;
  color: #8c8d96;
  font-weight: 400;
}
</style>