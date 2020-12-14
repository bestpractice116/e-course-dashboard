<template>
  <div class="">

    <h2 class="text-gray-700 dark:text-gray-200 font-medium ml-1 mb-1 text-sm">{{title}}</h2>

    <div class="flex flex-col relative">

      <div @click="clickedMenu" :class="{'hidden':isActive}" class="flex justify-between items-center px-4 py-1.5 text-sm cursor-pointer text-black bg-gray-200 rounded-md relative">
        <p class="font-semibold select-none">{{selectedItem}}</p>
        <IconDynamic icon="arrowDown" :class="{ 'transform rotate-180': isActive }" />
      </div>

      <div class="">
        <input v-model.trim="searchText" ref="search" type="text" placeholder="Start Typing..." :class="{'opacity-1 pointer-events-auto':isActive,'opacity-0 pointer-events-none':!isActive}" class="transition-all duration-200 w-full px-2.5 py-1.5 mb-1 rounded-md absolute z-50 border border-gray-300 focus:outline-none">
      </div>

      <div class="option-container absolute z-50 bg-gray-200 text-black w-full transition-all duration-200 rounded-b-md" :class="{ ' max-h-72 opacity-1 overflow-y-auto mt-12' : isActive,'max-h-0 opacity-0 overflow-hidden':!isActive }">
        <div @click="selectItem(item)" :class="{'hidden':item.toLowerCase().indexOf(searchText.toLowerCase())==-1}" class="hover:bg-gray-100 px-4 py-2.5 cursor-pointer" v-for="(item,index) in getDropdownDatas" :key="index">
          <input type="radio" class="radio mr-2 hidden" :id="item" name="category">
          <label class="cursor-pointer select-none" :for="item">{{item}}</label>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import IconDynamic from "../Global/IconDynamic.vue";
export default {
  name: "CustomSelect",
  components: {
    IconDynamic,
  },
  props: {
    datas: {
      type: Array,
      require: true,
    },
    title: {
      type: String,
      require: true,
    }
  },
  data() {
    return {
      selectedItem: "All",
      isActive: false,
      searchText: "",
    };
  },
  computed: {
    getDropdownDatas() {
      return ["All", ...this.datas];
    },
  },
  methods: {
    clickedMenu() {
      this.isActive = !this.isActive;
      this.searchText = "";
      this.$refs.search.focus();
    },
    selectItem(text) {
      this.selectedItem = text;
      this.isActive = false;
      this.$emit("selectedItem", text);
    },
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.isActive = false
      }
    },
  },
  mounted() {
    document.addEventListener('click', this.close);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.close);
  },
};
</script>

<style scoped>
.option-container::-webkit-scrollbar {
  width: 8px;
  background: #afafaf;
  border-radius: 0 10px 10px 0;
}
.option-container::-webkit-scrollbar-thumb {
  background: #303031;
  border-radius: 0 10px 10px 0;
}
</style>