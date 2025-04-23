/*import VueRouter from 'vue-router'*/
import { createRouter, createWebHistory } from 'vue-router'
import AskView from "@/views/AskView.vue";
import JobsView from "@/views/JobsView.vue";
import NewsView from "@/views/NewsView.vue";
import ItemView from "@/views/itemView.vue";
import UserView from "@/views/UserView.vue";

const routes = [
  {
    path : "/",
    redirect : '/news'
  },
  {
    path : '/news',
    name : 'news',
    component : NewsView
  },
  {
    path : '/ask',
    name : 'ask',
    component : AskView
  },
  {
    path : '/jobs',
    name : 'jobs',
    component : JobsView
  },
  {
    path : "/item/:id",
    component: ItemView
  },
  {
    path : "/user/:id",
    component: UserView
  },
]

export const router = createRouter({
  history : createWebHistory(),
  routes
})
