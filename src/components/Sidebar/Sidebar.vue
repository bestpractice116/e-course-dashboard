<template>
  <div class="flex flex-col px-12">

    <form action="/" class="flex items-center mt-8 mb-8 bg-inputGray">
      <label for="search" class="py-3 px-3">
        <IconDynamic icon="search" class="text-gray-800" />
      </label>
      <input id="search" type="text" class="w-full bg-inherit outline-none py-3" placeholder="Search...">
    </form>

    <h1 class="font-bold text-xl mb-6">Notifications</h1>

    <div v-for="(item,index) in notifications" :key="index">
      <NotificationBox v-if="item.type === 'course_data_ready'" :name="item.name" message="Your data is ready and you can see it now" :date="item.date" iconName="graph" iconcolor="text-purple-400" bgcolor="bg-purple-100" />

      <NotificationBox v-if="item.type === 'invitation'" :name="item.name" :person="item.person" message="invites to join the challange" :date="item.date" iconName="user" iconcolor="text-blue-400" bgcolor="bg-blue-50">
        <div class="flex justify-between mb-4 mt-4 gap-4" slot="buttons">
          <BaseButton color="negative" class="w-1/2 py-1.5 rounded-md">Decline</BaseButton>
          <BaseButton color="positive" class="w-1/2 py-1.5 rounded-md">Accept</BaseButton>
        </div>
      </NotificationBox>

      <NotificationBox v-if="item.type === 'assignment_done'" :name="item.name" message="Congratulation! you just finished your assignment" :date="item.date" iconName="exam" iconcolor="text-pink-400" bgcolor="bg-pink-100" />

      <div v-if="item.type === 'today_course'" class="mt-4 mb-4">
        <h2 class="font-bold text-lg">Today Course</h2>
        <img :src="item.image" :alt="item.image" class="rounded-lg mt-4 mb-4">
        <h4 class="font-medium">{{item.name}}</h4>
        <p class="mb-5 mt-2 text-gray-500 text-sm">This course will help you to become a reliable and skilled {{item.skill}} in this industry.</p>
        <div class="flex justify-between">
          <div class="flex justify-center items-center">
            <IconDynamic icon="calendar" class="text-gray-500" />
            <span class="ml-2 text-sm font-medium">{{item.date}}</span>
          </div>
          <div class="flex justify-center items-center">
            <IconDynamic icon="clock" class="text-gray-500" />
            <span class="ml-2 text-sm font-medium">{{item.hour}}</span>
          </div>
        </div>
        <div class="flex justify-between mt-6 mb-8 gap-4">
          <BaseButton color="negative" class="w-1/2 py-2.5 rounded-md">Skip</BaseButton>
          <BaseButton color="positive" class="w-1/2 py-2.5 rounded-md">Join</BaseButton>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { notifications } from "./notifications.js";
import BaseButton from "../Global/BaseButton.vue";
import IconDynamic from "../Global/IconDynamic.vue";
import NotificationBox from "./NotificationBox.vue";
export default {
  name: "Notifications",
  mixins: [notifications],
  components: {
    BaseButton,
    IconDynamic,
    NotificationBox,
  },
};
</script>

<style>
</style>