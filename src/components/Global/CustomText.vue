<template>
  <component :is="tag" :class="[size,weight]">
    <slot />
  </component>
</template>

<script>
export default {
  name: "CustomText",
  props: {
    tag: {
      type: String,
      default: "span",
    },
    size: {
      type: String,
      default: "normal", // normal:15, small:12, xsmall:11, xxsmall:10
      validator: function (value) {
        return (
          ["big", "normal", "small", "xsmall", "xxsmall"].indexOf(value) !== -1
        );
      },
    },
    weight: {
      type: String,
      default: "normal", // light:300, normal:400, bold:600, bigbold: 900
      validator: function (value) {
        return ["light", "normal", "bold", "bigbold"].indexOf(value) !== -1;
      },
    },
  },
};
</script>

<style scoped>
.big {
  font-size: 18px;
}
.normal {
  font-size: 15px;
}
.small {
  font-size: 12px;
}
.xsmall {
  font-size: 11px;
}
.xxsmall {
  font-size: 10px;
}
.light {
  font-weight: 300;
}
.normal {
  font-weight: 400;
}
.bold {
  font-weight: 600;
}
.xbold {
  font-weight: 900;
}
</style>