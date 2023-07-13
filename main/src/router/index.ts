import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import MeView from "../views/MeView.vue";
import RandomPictureView from "../views/RandomPictureView.vue";
import DiscoverView from "../views/DiscoverView.vue";
import CVView from "../views/CVView.vue";
import WorkExperienceView from "../views/WorkExperienceView.vue";
import SkillsView from "../views/SkillsView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import ThreeDView from "../views/ThreeDView.vue";
import PublicationsView from "../views/PublicationsView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  { path: "/", name: "home-view", component: HomeView },
  { path: "/home", redirect: "/" },
  { path: "/about", name: "about-view", component: AboutView },
  { path: "/me", name: "me-view", component: MeView },
  {
    path: "/randompicture",
    name: "random-picture-view",
    component: RandomPictureView,
  },
  { path: "/discover", name: "discover-view", component: DiscoverView },
  { path: "/cv", name: "c-v-view", component: CVView },
  {
    path: "/workexperience",
    name: "work-experience-view",
    component: WorkExperienceView,
  },
  {
    path: "/publications",
    name: "publlications-view",
    component: PublicationsView,
  },
  { path: "/skills", name: "skills-view", component: SkillsView },
  { path: "/projects", name: "projects-view", component: ProjectsView },
  { path: "/3d", name: "three-d-view", component: ThreeDView },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
