<template>
  <component :is="IconDynamic" />
</template>

<script>
export default {
  name: "IconDynamic",
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
  computed: {
    IconDynamic() {
      return () =>
        import(
          `../../icons/${this.icon}.svg`

          /* webpackChunkName: "icons" */
          /* webpackMode: "lazy-once" */
        );
    },
  },
};
</script>