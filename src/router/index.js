import Vue from "vue";
import VueRouter from "vue-router";
import Task1 from "../views/Task1.vue";
import Post from "../views/Post.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Task1",
    component: Task1,
  },
  {
    path: "/post/:id",
    name: "Post",
    component: Post,
  },
  {
    path: "/task2",
    name: "Task2",
    component: () => import("../views/Task2.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
