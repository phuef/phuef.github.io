<template>
  <v-app>
    <div style="d-flex">
      <v-app-bar
        elevation="4"
        color="blue-grey darken-2"
        class="px-0"
        dark
        width
      >
        <v-toolbar-title>
          <v-btn to="/" dark text class="px-2">
            <v-icon>mdi-home-outline</v-icon>
            <div
              v-show="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs"
              class="pl-2"
            >
              Phil Hüffer
            </div>
          </v-btn>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <div v-for="navItem in navItems" :key="navItem.route">
          <v-btn :to="navItem.route" dark text class="px-2">
            <v-icon>{{ navItem.icon }}</v-icon>
            <div
              v-show="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs"
              class="pl-2"
            >
              {{ navItem.name }}
            </div>
          </v-btn>
          <!--
            <v-btn to="/cv" dark text class="ms-3"> Academic Career </v-btn>
            <v-btn to="/workexperience" dark text class="ms-3"> Work Experience </v-btn>
            <v-btn to="/skills" dark text class="ms-3"> Skills </v-btn>
            <v-btn to="/projects" dark text class="ms-3"> Projects </v-btn>-->
          <!-- ideas: publications, current projects-->
        </div>
      </v-app-bar>
    </div>
    <router-view />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  data: () => ({
    navItems: [
      { route: "/cv", name: "Academic Career", icon: "mdi-school-outline" },
      {
        route: "/workexperience",
        name: "Work Experience",
        icon: "mdi-briefcase-outline",
      },
      { route: "/skills", name: "Skills", icon: "mdi-tools" },
      //{ route: "/projects", name: "Projects", icon: "mdi-penguin" },
      //{ route: "/3d", name: "", icon: "mdi-video-3d" },
    ],
  }),
});
</script>
