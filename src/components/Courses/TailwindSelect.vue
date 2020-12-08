<template>
  <div class="w-full">
    <label id="listbox-label" class="block text-sm font-medium text-gray-700">
      Assigned to
    </label>

    <div class="mt-1 relative">

      <button @click="clickMenu" type="button" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label" class="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        <span class="flex items-center">
          <img :src="selectedPhoto" alt="" class="flex-shrink-0 h-6 w-6 rounded-full">
          <span class="ml-3 block truncate">
            {{selectedName}}
          </span>
        </span>
        <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">

          <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </span>
      </button>

      <div class="absolute mt-1 w-full rounded-md bg-white shadow-lg transition ease-in duration-100" :class="{'invisible opacity-0':!isActive,'visible opacity-1':isActive}">
        <ul tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-item-3" class="max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">

          <li @click="selectName(item.name,item.photo)" v-for="(item,index) in people" :key="index" id="listbox-item-0" role="option" @mouseenter="mouseOvered(item.name)" @mouseleave="isMouseOver=false" :class="{'text-white bg-indigo-600':item.name == mouseOverName,'text-gray-900':!item.name==mouseOverName}" class="cursor-pointer select-none relative py-2 pl-3 pr-9">
            <div class="flex items-center">
              <img :src="item.photo" :alt="item.name" class="flex-shrink-0 h-6 w-6 rounded-full">
              <!-- Selected: "font-semibold", Not Selected: "font-normal" -->
              <span class="ml-3 block font-normal truncate" :class="{'font-semibold':selectedName === item.name}">
                {{item.name}}
              </span>
            </div>

            <span v-if="selectedName === item.name" :class="{'text-white':mouseOverName === item.name, 'text-indigo-600':mouseOverName !== item.name}" class="absolute inset-y-0 right-0 flex items-center pr-4">
              <!-- Heroicon name: check -->
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
  data() {
    return {
      people: [
        {
          name: "Tim Cook",
          photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
          name: "Wade Cooper",
          photo: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80",
        },
        {
          name: "Mason Haeney",
          photo: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
          name: "Arlene Mccoy",
          photo: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
          name: "Caroline Schultz",
          photo: "https://images.unsplash.com/photo-1568409938619-12e139227838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
          name: "Tanya Fox",
          photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        }
      ],
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

  created() {
    this.selectedName = this.people[0].name;
    this.selectedPhoto = this.people[0].photo;
  },
  mounted() {
    document.addEventListener('click', this.close);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.close);
  }
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