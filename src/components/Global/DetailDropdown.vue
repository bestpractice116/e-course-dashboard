<template>
  <details class="select-none">
    <summary class="text-black dark:text-white outline-none">
      Assignee
      <span class="drowpdown-arrow"></span>
    </summary>
    <div class="container text-sm rounded-md text-black dark:text-black shadow-lg bg-white w-80 h-auto max-h-120 absolute left-0 top-full mt-1">
      <header class="container-header flex justify-between items-center px-3 py-2 border-b bg-gray-100 border-gray-200">
        <span class="container-header-title font-semibold">Filter by who's assigned</span>
        <!--
        <button class="p-1 focus:outline-none">
          <IconDynamic icon="close" class="cursor-pointer" />
        </button>
        -->
      </header>
      <div class="container-filter p-2.5 border-b border-gray-200">
        <input type="text" placeholder="Filter users" v-model.trim="searchText" class="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
      </div>

      <div class="container-list text-xs">

        <a href.prevent="" class="container-list-item flex items-center px-3 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100" @click="selectUser('nobody')">
          <IconDynamic icon="check" :class="{'visible':selectedUser === 'nobody','invisible':selectedUser !=='nobody'}" class="w-4 h4 mr-3" />
          <strong class="font-semibold">Assigned to nobody</strong>
        </a>

        <a href.prevent="" :class="{'hidden':item.username.toLowerCase().indexOf(searchText.toLowerCase()) && item.name.toLowerCase().indexOf(searchText.toLowerCase()) === -1}" class="container-list-item flex items-center px-3 py-2 cursor-pointer hover:bg-gray-100" v-for="(item,index) in datas" :key="index" @click="selectUser(item.username)">
          <IconDynamic icon="check" class="w-4 h-4 mr-2" :class="{'visible':selectedUser === item.username,'invisible':selectedUser !== item.username}" />
          <img :src="item.photo" :alt="item.username" class="flex-shrink-0 h-6 w-6 rounded-full">
          <strong class="mx-2 font-semibold">{{item.username}}</strong>
          <span>{{item.name}}</span>
        </a>

      </div>
    </div>
  </details>
</template>

<script>
import IconDynamic from "../Global/IconDynamic.vue";
export default {
  name: "DetailDropdown",
  components: {
    IconDynamic,
  },
  props: {
    datas: {
      type: Array,
      require: true,
    }
  },
  data() {
    return {
      selectedUser: "",
      searchText: "",
    }
  },
  methods: {
    selectUser(username) {
      this.selectedUser = username;
    },
  },
}
</script>

<style scoped>
details {
  position: relative;
  display: inline-block;
}
summary {
  user-select: none;
  color: #000;
  cursor: pointer;
}
summary::-webkit-details-marker {
  display: none;
}
.drowpdown-arrow {
  display: inline-block;
  width: 0;
  height: 0;
  vertical-align: middle;
  content: "";
  border-top-style: solid;
  border-top-width: 4px;
  border-right: 4px solid transparent;
  border-bottom: 0 solid transparent;
  border-left: 4px solid transparent;
  border-top-color: #000;
}
.dark .drowpdown-arrow {
  border-top-color: #fff;
}
details[open] > summary:before {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  display: block;
  cursor: default;
  content: " ";
  background: transparent;
}
.container {
  z-index: 2;
}
.container-list-item:not(:last-child) {
  border-bottom: 1px solid rgba(229, 231, 235);
}
</style>