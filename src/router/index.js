import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePage/HomePage.vue";
import SignUp from "../views/SignUp/SignUp.vue";
import SignIn from "../views/SignIn/SignIn.vue";
import Dashboard from "../views/Dashboard/Dashboard.vue";
import store from "../store/index.js";

Vue.use(VueRouter);

// Routes
const routes = [
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/signin",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: '/',
    component: HomePage,
    beforeEnter(to, from, next) {
      if (store.getters.isAuthenticated) {
        next()
      } else {
        next("/signup")
      }
    },
    children: [
      {
        path: '',
        component: Dashboard,
        name: 'Dashboard',
        meta: { description: 'Dashboard Section' }
      },
      {
        path: "/courses",
        name: "Courses",
        component: () =>
          import(/* webpackChunkName: "courses" */ "../views/Courses/Courses.vue"),
        meta: { description: 'Courses Section' }
      },
      {
        path: "/schedule",
        name: "Schedule",
        component: () =>
          import(/* webpackChunkName: "schedule" */ "../views/Schedule/Schedule.vue"),
        meta: { description: 'Schedule Section' }
      },
      {
        path: "/friends",
        name: "Friends",
        component: () =>
          import(/* webpackChunkName: "friends" */ "../views/Friends/Friends.vue"),
        meta: { description: 'Friends Section' }
      },
      {
        path: "/message",
        name: "Message",
        component: () =>
          import(/* webpackChunkName: "message" */ "../views/Message/Message.vue"),
        meta: { description: 'Message Section' }
      },
      {
        path: "/achievment",
        name: "Achievment",
        component: () =>
          import(/* webpackChunkName: "achievment" */ "../views/Achievment/Achievment.vue"),
        meta: { description: 'Achievment Section' }
      },
      {
        path: "/settings",
        name: "Settings",
        component: () =>
          import(/* webpackChunkName: "settings" */ "../views/Settings/Settings.vue"),
        meta: { description: 'Settings Section' }
      },
    ],
  },
];


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;