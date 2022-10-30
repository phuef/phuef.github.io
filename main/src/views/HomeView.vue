<template>
  <div>
    <v-container>
    <img v-if="currentSection==='discover'" width="50px" height="50px" src = "../assets/disc.svg"/>
    </v-container>
    <v-container>
      <v-col
      cols="12"
      class="py-2"
    >
      <v-btn-toggle
        v-model="currentSection"
        group
        borderless
        light
        shaped
        color=primary
      >
      <v-btn value="home">Home</v-btn>
      <v-btn value="cv">Academic Career</v-btn>
      <v-btn value="workexperience">Work Experience</v-btn>
      <!--<v-btn value="discover">Discover</v-btn>-->
      </v-btn-toggle>
    </v-col>
    </v-container>
    <v-container>
      <home-page v-if="currentSection==='home'"/>
      <c-v-page v-if="currentSection==='cv'"/>
      <work-experience-page v-if="currentSection==='workexperience'"/>
      <discover-page v-if="currentSection==='discover'"/>

      <!-- ideas: work experience, publications, current projects-->
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HomePage from "../components/HomePage.vue";
import CVPage from "../components/CVPage.vue";
import DiscoverPage from "../components/DiscoverPage.vue";
import WorkExperiencePage from "../components/WorkExperiencePage.vue";


export default Vue.extend({
  name: "home-view",

  components: {
    HomePage,
    CVPage,
    DiscoverPage,
    WorkExperiencePage
  },
  data() {
    return {
      currentSection: 'home'
    }
  },
});
</script>
