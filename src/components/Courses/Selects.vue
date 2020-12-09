<template>
  <div class="flex gap-4">
    <CustomSelect :datas="categories"/>
    <TailwindSelect :datas="teachers"/>
  </div>
</template>

<script>
import CustomSelect from "../Global/CustomSelect.vue";
import TailwindSelect from "../Global/TailwindSelect.vue";
export default {
  name: "Selects",
  components: {
    CustomSelect,
    TailwindSelect,
  },
  data() {
    return {
      categories: [
        {
          id: "automobiles",
          text: "Automobiles",
        },
        {
          id: "film",
          text: "Film & Anmation",
        },
        {
          id: "science",
          text: "Science & Technology",
        },
        {
          id: "art",
          text: "Art",
        },
        {
          id: "music",
          text: "Music",
        },
        {
          id: "travel",
          text: "Travel & Events",
        },
        {
          id: "sports",
          text: "Sports",
        },
        {
          id: "news",
          text: "News & Politics",
        },
        {
          id: "tutorials",
          text: "Tutorials",
        }
      ],
      teachers: [
        {
          name: "Tim Cook",
          photo: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80",
        },
        {
          name: "Wade Cooper",
          photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
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
    }
  }
}
</script>

<style>

</style>