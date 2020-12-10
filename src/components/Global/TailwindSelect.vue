<template>
  <div class="">
    <label id="listbox-label" class="block text-sm font-medium mb-1 ml-1 text-gray-700 dark:text-gray-200">
      Teacher
    </label>

    <div class="mt-1 relative">

      <button @click="clickMenu" type="button" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label" class="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-1.5 text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        <span class="flex items-center">
          <img :src="selectedPhoto" alt="" class="flex-shrink-0 h-6 w-6 rounded-full">
          <span class="ml-3 block truncate text-black dark:text-black">
            {{selectedName}}
          </span>
        </span>
        <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <IconDynamic icon="arrowupdown" />
        </span>
      </button>

      <div class="absolute mt-1 w-full rounded-md bg-white shadow-lg transition-all ease-in duration-150" :class="{'invisible opacity-0':!isActive,'visible opacity-1':isActive}">
        <ul tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-item-3" class="max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">

          <li @click="selectName(item.name,item.photo)" v-for="(item,index) in datas" :key="index" id="listbox-item-0" role="option" @mouseenter="mouseOvered(item.name)" @mouseleave="isMouseOver = false" :class="{'text-white bg-indigo-600':item.name === mouseOverName,'text-gray-900':item.name !== mouseOverName}" class="cursor-pointer select-none relative py-2 pl-3 pr-9">
            <div class="flex items-center">
              <img :src="item.photo" :alt="item.name" class="flex-shrink-0 h-6 w-6 rounded-full">
              <!-- Selected: "font-semibold", Not Selected: "font-normal" -->
              <span class="ml-3 block font-normal truncate" :class="{'font-semibold':selectedName === item.name}">
                {{item.name}}
              </span>
            </div>
            <span v-if="selectedName === item.name" :class="{'text-white':mouseOverName === item.name, 'text-indigo-600':mouseOverName !== item.name}" class="absolute inset-y-0 right-0 flex items-center pr-4">
              <IconDynamic icon="check" />
            </span>
          </li>

        </ul>
      </div>

    </div>
  </div>
</template>

<script>
import IconDynamic from "../Global/IconDynamic.vue";
export default {
  name: "TaiwindSelect",
  components: {
    IconDynamic,
  },
  props: {
    datas: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      selectedName: "",
      selectedPhoto: "",
      isActive: false,
      mouseOverName: "",
    }
  },
  methods: {
    clickMenu() {
      this.isActive = !this.isActive;
    },
    selectName(name, photo) {
      this.selectedName = name;
      this.selectedPhoto = photo;
      this.isActive = false;
    },
    mouseOvered(name) {
      this.mouseOverName = name;
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
  created() {
    this.selectedName = this.datas[0].name;
    this.selectedPhoto = this.datas[0].photo;
  },
}
</script>

<style scoped>
.fade-enter {
  opacity: 1;
}
.fade-enter-active {
  opacity: 1;
  transition: ease-in 1000;
}
.fade-leave {
  transition: ease-in 1000ms;
  opacity: 1;
}
.fade-leave-active {
  opacity: 0;
}
</style>