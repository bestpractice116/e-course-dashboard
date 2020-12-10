<template>
  <div class="flex flex-col gap-4">

    <div class="flex justify-between items-center gap-8 pb-4 w-full">
      <CustomSelect class="w-1/2" :datas="categories" dropdownTitle="Course Topics" @selectedItem="selectedItemReceived" />
      <TailwindSelect class="w-1/2" :datas="teachers" />

    </div>
    <DetailDropdown class="w-1/3" :datas="people" />

    <p class="text-xs">no js on dropdown except filter</p>
    <p>{{selectedTopic}}</p>

    <div class="flex justify-between flex-wrap">
      <div v-for="(course,index) in courses" :key="index" class="course border">
        <CourseBox :photo="course.photo" :courseName="course.courseName" :courseDescription="course.courseDescription" :teacherName="course.teacher" />
      </div>
    </div>

  </div>

</template>

<script>
import CustomSelect from "../Global/CustomSelect.vue";
import TailwindSelect from "../Global/TailwindSelect.vue";
import DetailDropdown from "../Global/DetailDropdown.vue";
import CourseBox from "./CourseBox.vue";
export default {
  name: "CourseContainer",
  components: {
    CustomSelect,
    TailwindSelect,
    DetailDropdown,
    CourseBox,
  },
  data() {
    return {
      categories: [
        {
          id: "all",
          text: "All",
        },
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
      people: [
        {
          username: "mertcankose",
          name: "Mertcan Kose",
          photo: "https://avatars1.githubusercontent.com/u/56760896?s=40&v=4",
        },
        {
          username: "ademilter",
          name: "Adem İlter",
          photo: "https://avatars0.githubusercontent.com/u/187922?s=40&v=4",
        },
        {
          username: "f",
          name: "Fatih Kadir Akın",
          photo: "https://avatars3.githubusercontent.com/u/196477?s=40&v=4",
        }
      ],
      courses: [
        {
          photo: "https://kidsmartapp.co.uk/content/wp-content/uploads/2019/07/maths-chalkboard-1.jpg",
          courseName: "Math",
          courseDescription: "Matematik",
          teacher: "Tom Cook",
        },
        {
          photo: "https://kidsmartapp.co.uk/content/wp-content/uploads/2019/07/maths-chalkboard-1.jpg",
          courseName: "Math",
          courseDescription: "Matematik",
          teacher: "Tom Cook",
        },
        {
          photo: "https://kidsmartapp.co.uk/content/wp-content/uploads/2019/07/maths-chalkboard-1.jpg",
          courseName: "Math",
          courseDescription: "Matematik",
          teacher: "Tom Cook",
        },
        {
          photo: "https://kidsmartapp.co.uk/content/wp-content/uploads/2019/07/maths-chalkboard-1.jpg",
          courseName: "Math",
          courseDescription: "Matematik",
          teacher: "Tom Cook",
        },
        {
          photo: "https://kidsmartapp.co.uk/content/wp-content/uploads/2019/07/maths-chalkboard-1.jpg",
          courseName: "Math",
          courseDescription: "Matematik",
          teacher: "Tom Cook",
        },
        {
          photo: "https://kidsmartapp.co.uk/content/wp-content/uploads/2019/07/maths-chalkboard-1.jpg",
          courseName: "Math",
          courseDescription: "Matematik",
          teacher: "Tom Cook",
        },
        {
          photo: "https://kidsmartapp.co.uk/content/wp-content/uploads/2019/07/maths-chalkboard-1.jpg",
          courseName: "Math",
          courseDescription: "Matematik",
          teacher: "Tom Cook",
        },
        {
          photo: "https://kidsmartapp.co.uk/content/wp-content/uploads/2019/07/maths-chalkboard-1.jpg",
          courseName: "Math",
          courseDescription: "Matematik",
          teacher: "Tom Cook",
        },
        {
          photo: "https://kidsmartapp.co.uk/content/wp-content/uploads/2019/07/maths-chalkboard-1.jpg",
          courseName: "Math",
          courseDescription: "Matematik",
          teacher: "Tom Cook",
        }
      ],
      selectedTopic: "",
    }
  },
  methods: {
    selectedItemReceived(item) {
      this.selectedTopic = item;
    }
  },

}
</script>


<style scoped>
.course {
  flex: 0 0 30%;
  margin-bottom: 14px;
}
</style>