import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import MeView from "../views/MeView.vue";
import RandomPictureView from "../views/RandomPictureView.vue";
import DiscoverView from "../views/DiscoverView.vue";
import CVView from "../views/CVView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {path: "/",name: "home-view",component: HomeView,},
  {path: "/home", redirect:"/"},
  {path: "/about",name: "about-view",component: AboutView,},
  {path: "/me",name: "me-view",component: MeView,},
  {path: "/randompicture",name: "random-picture-view",component: RandomPictureView,},
  {path: "/discover",name: "discover-view",component: DiscoverView,},
  {path: "/cv",name: "c-v-view",component: CVView,},

];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
