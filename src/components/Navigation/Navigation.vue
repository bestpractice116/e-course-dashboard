<template>
  <div class="flex flex-col h-screen max-w-sm bg-gradient-to-b from-navigationGray to-navigationPurple">

    <div class="px-8 mb-10 mt-10">
      <router-link to="/" exact class="flex items-center p-4 text-blue font-semibold">
        <IconDynamic icon="logo" />
        <span class="text-xl m-2">Bandrek.id</span>
      </router-link>
    </div>

    <div class="flex flex-col justify-between px-8 h-full">

      <div class="baseInactive">
        <router-link v-for="(item,index) in items" :key="index" :to="{name:item.name}" exact class="flex items-center mb-4 py-3 px-6 font-medium" active-class="text-black bg-white rounded-md">
          <IconDynamic :icon="item.icon" />
          <span class="ml-2">{{item.name}}</span>
        </router-link>
      </div>

      <div class="mb-8">
        <router-link to="/logout" exact class="flex mb-4 py-3 px-6 font-medium items-center text-navGray">
          <IconDynamic icon="logout" />
          <span class="ml-2">Logout</span>
        </router-link>
      </div>

    </div>

  </div>
</template>

<script>
import IconDynamic from "./IconDynamic.vue";
import { items } from "./items.js";
export default {
  name: "Navigation",
  mixins: [items],
  components: {
    IconDynamic,
  },
};
</script>

<style scoped>
.baseInactive {
  color: #8e92ad;
}
</style>