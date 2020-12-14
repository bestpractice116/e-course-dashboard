<template>
  <div class="flex flex-col gap-4">

    <div class="flex justify-between items-center gap-2 pb-4 w-full">
      <CustomSelect class="w-1/5" :datas="courseTopics" title="Course Topics" @selectedItem="selectedTopicReceived" />
      <TailwindSelect class="w-1/5" :datas="teacherInfos" title="Teachers(photos)" @selectedItem="selectedTeacherReceived" type="photo" />
      <TailwindSelect class="w-1/5" :datas="teacherInfos" title="Teachers(status)" @selectedItem="selectedTeacherReceived" type="status" />
      <TailwindSelect class="w-1/5" :datas="teacherInfos" title="Teachers(nickname)" @selectedItem="selectedTeacherReceived" type="secondaryName" />
      <TailwindSelect class="w-1/5" :datas="teacherInfos" title="Teachers(standard)" @selectedItem="selectedTeacherReceived" type="onlyName" />
    </div>

    <OnlyCssDropdown class="w-1/3" :datas="people" />
    <p class="text-xs">no js on dropdown except filter</p>

    <Search />

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
import Search from "../Global/Search.vue";
import OnlyCssDropdown from "../Global/OnlyCssDropdown.vue";
import CourseBox from "./CourseBox.vue";
import coursesDatas from "../../assets/courses.json"
export default {
  name: "CourseContainer",
  components: {
    CustomSelect,
    TailwindSelect,
    Search,
    OnlyCssDropdown,
    CourseBox,
  },
  data() {
    return {
      courseDatas: coursesDatas["courses"],
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
    courseTopics() {
      return [...new Set(this.courseDatas.map(e => e.name))];
    },
    teachers() {
      return this.courseDatas.map((
        { teacher, teacher_photo, teacher_nick, teacher_status }) =>
        ({ teacher, teacher_photo, teacher_nick, teacher_status }))
    },
    teacherInfos() {
      let teachers = [];
      this.teachers.forEach((el) => {
        teachers.push({
          name: el.teacher,
          photo: el.teacher_photo,
          nick: el.teacher_nick,
          status: el.teacher_status
        });
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
}
</script>


<style scoped>
</style>