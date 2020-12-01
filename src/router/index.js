import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard/Dashboard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/courses",
    name: "Courses",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Courses/Courses.vue"),
  },
  {
    path: "/schedule",
    name: "Schedule",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Schedule/Schedule.vue"),
  },
  {
    path: "/friends",
    name: "Friends",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Friends/Friends.vue"),
  },
  {
    path: "/message",
    name: "Message",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Message/Message.vue"),
  },
  {
    path: "/achievment",
    name: "Achievment",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Achievment/Achievment.vue"),
  },
  {
    path: "/settings",
    name: "Settings",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Settings/Settings.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;