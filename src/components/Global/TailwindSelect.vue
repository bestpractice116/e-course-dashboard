<template>
  <div class="">

    <label id="" class="block text-sm font-medium mb-1 ml-1 text-gray-700 dark:text-gray-200">
      {{title}}
    </label>

    <div class="relative">

      <button @click="isActive = !isActive" type="button" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label" class="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 py-1.5 text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        <span class="flex items-center">

          <template>
            <img v-if="type === 'photo'" :src="selectedPhoto" alt="" class="flex-shrink-0 h-6 w-6 mr-2 rounded-full">
            <div v-if="type === 'status' && selectedName !== 'All'" class="w-2 h-2 rounded-full mr-2" :class="headStatusStyle"></div>
          </template>

          <span class="block truncate text-black dark:text-black select-none">
            {{selectedName}}
          </span>

        </span>
        <span class="absolute inset-y-0 right-2 flex items-center pointer-events-none">
          <IconDynamic icon="arrowupdown" />
        </span>

      </button>

      <div class="absolute z-50 mt-1 w-full rounded-md bg-white shadow-lg transition-all ease-in duration-150" :class="{'invisible opacity-0':!isActive}">
        <ul tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-item-3" class="max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm" @mouseleave.stop="isMouseOverBox = false">

          <li @click="selectPerson(item.name,item.photo,item.status)" v-for="(item,index) in dropdownDatas" :key="index" id="listbox-item-0" role="option" @mouseenter="mouseEnter(item.name)" class="cursor-pointer select-none relative py-2 pl-3 pr-9" :class="listItemStyle(item.name)">
            <div class="flex items-center">

              <template>
                <img v-if="type === 'photo'" :src="item.photo" :alt="item.name" class="flex-shrink-0 h-6 w-6 mr-2 rounded-full">
                <div v-if="type === 'status' && item.name !== 'All'" class="w-2 h-2 rounded-full mr-2" :class="statusListItemStyle(item.status)"></div>
              </template>

              <span class="block truncate font-normal" :class="{'font-semibold':selectedName === item.name}">
                {{item.name}}
              </span>
              <span v-if="type=== 'secondaryName' && item.name !== 'All'" class="ml-3 text-xs block truncate font-normal text-gray-500">
                @{{item.nick}}
              </span>

            </div>
            <span v-if="selectedName === item.name" class="absolute inset-y-0 right-0 flex items-center pr-4" :class="checkIconStyle(item.name)">
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
    },
    title: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      require: true,
    }
  },
  data() {
    return {
      selectedName: "All",
      selectedPhoto: "",
      selectedStatus: false,
      isActive: false,
      mouseOverPerson: "",
      isMouseOverBox: false,
      defaultImage: "data:image/png;base64,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",
    }
  },
  computed: {
    dropdownDatas() {
      return [{ name: "All", photo: this.defaultImage },
        ...this.datas
      ];
    },
    headStatusStyle() {
      switch (this.selectedStatus) {
      case true:
        return 'bg-indigo-600';
        break;
      case false:
        return 'bg-gray-300'
        break;
      default:
        return 'bg-gray-300'
        break;
      }
    },
  },
  methods: {
    selectPerson(name, photo, status) {
      this.selectedName = name;
      this.selectedPhoto = photo;
      this.selectedStatus = status;
      this.isActive = false;
      this.$emit("selectedItem", name);
    },
    mouseEnter(name) {
      this.mouseOverPerson = name;
      this.isMouseOverBox = true;
    },
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.isActive = false
      }
    },
    // {'text-white bg-indigo-600':item.name === mouseOverPerson && isMouseOverBox,'text-gray-900':item.name !== mouseOverPerson}
    listItemStyle(itemName) {
      return (itemName === this.mouseOverPerson && this.isMouseOverBox === true) ? 'text-white bg-indigo-600' : 'text-gray-900';
    },
    // {'bg-indigo-600':item.status, 'bg-gray-300':!item.status}
    statusListItemStyle(status) {
      return status === true ? 'bg-indigo-600' : 'bg-gray-300';
    },
    // {'text-gray-50':mouseOverPerson === item.name && isMouseOverBox,'text-indigo-600':mouseOverPerson !== item.name || !isMouseOverBox}
    checkIconStyle(itemName) {
      return (itemName === this.mouseOverPerson && this.isMouseOverBox === true) ? 'text-gray-50' : 'text-indigo-600';
    }
  },
  mounted() {
    document.addEventListener('click', this.close);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.close);
  },
  created() {
    this.selectedPhoto = this.defaultImage;
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