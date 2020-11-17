import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  }
];

const router = new VueRouter({
  routes,
});

export default router;
