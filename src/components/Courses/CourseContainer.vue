<template>
  <div class="flex flex-col gap-4">

    <div class="flex justify-between items-center gap-8 pb-4 w-full">
      <CustomSelect class="w-1/2" :dropdownDatas="getCourseTopics" dropdownTitle="Course Topics" @selectedItem="selectedTopicReceived" />
      <TailwindSelect class="w-1/2" :dropdownDatas="getTeachersForDropdown" dropdownTitle="Teachers" @selectedItem="selectedTeacherReceived" />

    </div>
    <DetailDropdown class="w-1/3" :datas="people" />

    <p class="text-xs">no js on dropdown except filter</p>
    <p>{{selectedTopic}}</p>
    <p>{{selectedTeacher}}</p>

    <div class="flex gap-4 flex-wrap justify-center md:justify-around lg:justify-start">
      <template v-for="(course,index) in courseDatas">
        <div :key="index + 1" v-if="selectedTopic === 'All' && selectedTeacher === 'All'" class="flex-thirdMobile md:flex-thirdTablet lg:flex-thirdDesktop border mb-4 rounded-md overflow-hidden">
          <CourseBox :photo="course.course_photo" :courseName="course.name" :courseDescription="course.description" :teacherName="course.teacher" />
        </div>
        <div :key="index + 2" v-if="selectedTopic !== 'All' && selectedTeacher === 'All'" :class="{'hidden':selectedTopic !== course.name}" class="flex-thirdMobile md:flex-thirdTablet lg:flex-thirdDesktop border mb-4 rounded-md overflow-hidden">
          <CourseBox :photo="course.course_photo" :courseName="course.name" :courseDescription="course.description" :teacherName="course.teacher" />
        </div>
        <div :key="index + 3" v-if="selectedTopic === 'All' && selectedTeacher !== 'All'" :class="{'hidden':selectedTeacher !== course.teacher}" class="flex-thirdMobile md:flex-thirdTablet lg:flex-thirdDesktop border mb-4 rounded-md overflow-hidden">
          <CourseBox :photo="course.course_photo" :courseName="course.name" :courseDescription="course.description" :teacherName="course.teacher" />
        </div>
        <div :key="index + 4" v-if="selectedTopic !== 'All' && selectedTeacher !== 'All'" :class="{'hidden':selectedTopic !== course.name || selectedTeacher !== course.teacher}" class="flex-thirdMobile md:flex-thirdTablet lg:flex-thirdDesktop border mb-4 rounded-md overflow-hidden">
          <CourseBox :photo="course.course_photo" :courseName="course.name" :courseDescription="course.description" :teacherName="course.teacher" />
        </div>
      </template>
    </div>

  </div>

</template>

<script>
import CustomSelect from "../Global/CustomSelect.vue";
import TailwindSelect from "../Global/TailwindSelect.vue";
import DetailDropdown from "../Global/DetailDropdown.vue";
import CourseBox from "./CourseBox.vue";
import coursesDatas from "../../assets/courses.json"
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
      courseDatas: coursesDatas["courses"],
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
      selectedTopic: "All",
      selectedTeacher: "All",
    }
  },
  computed: {
    getCourseTopics() {
      return [...new Set(this.courseDatas.map(e => e.name))];
    },
    getTeachers() {
      return this.courseDatas.map((
        { teacher, teacher_photo }) => ({ teacher, teacher_photo }))
    },
    getTeachersForDropdown() {
      let teachers = [];
      this.getTeachers.forEach((el) => {
        teachers.push({ name: el.teacher, photo: el.teacher_photo });
      });
      return teachers;
    },
    isHideCourse() {
      return this.selectedTopic !== 'All' && this.selectedTeacher !== 'All';
    }
  },
  methods: {
    selectedTopicReceived(item) {
      this.selectedTopic = item;
    },
    selectedTeacherReceived(item) {
      this.selectedTeacher = item;
    }
  },
  created() {
    console.log(this.courseDatas.map((
      { teacher, teacher_photo }) => ({ teacher, teacher_photo })));
  }
}
</script>


<style scoped>
</style>