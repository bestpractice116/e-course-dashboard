<template>
  <div class="flex">
    <div class="w-12 h-12 mr-3 bg-gray-200 rounded-full"></div>
    <div class="flex flex-col flex-1 min-w-0">
      <div class="w-1/3 h-4 mt-1 bg-gray-200 rounded"></div>

      <div class="mt-1 mb-1 space-y-1">

        <template v-if="type === 'short'">
          <div class="w-1/2 h-4 pt-1">
            <div class="h-full bg-gray-200 rounded"></div>
          </div>
        </template>

        <template v-if="type === 'long'">
          <div class="w-11/12 h-4 pt-1">
            <div class="h-full bg-gray-200 rounded"></div>
          </div>
          <div class="w-2/3 h-4 pt-1">
            <div class="h-full bg-gray-200 rounded"></div>
          </div>
        </template>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkeletonComment",
  props: {
    type: {
      type: String,
      require: true,
    }
  }
}
</script>

<style>
</style>