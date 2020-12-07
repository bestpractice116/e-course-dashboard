export const notifications = {
  data() {
    return {
      notifications: [
        {
          type: "course_data_ready",
          name: "Course Data",
          date: "2 minutes ago",
        },
        {
          type: "invitation",
          name: "Challange invitation",
          person: "Johnny Amber",
          date: "1 hour ago",
        },
        {
          type: "assignment_done",
          name: "Kacang Exam",
          date: "a day ago",
        },
        {
          type: "today_course",
          name: "Banrek Course",
          skill: "Banrek seller",
          date: "22 Oct, 2020",
          hour: "10 am - 11 am",
          image: "https://picsum.photos/seed/picsum/440/130",
        }
      ],
    }
  },
}