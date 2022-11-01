<template>
  <div>
    <v-container width=100%>
      <v-col
      cols="12"
      class="py-2"
    >
      <v-btn-toggle
        v-model="currentSection"
        
        borderless
        light
        shaped
        color=primary
      >
      <v-btn value="home">Home</v-btn>
      <v-btn value="cv">Academic Career</v-btn>
      <v-btn value="workexperience">Work Experience</v-btn>
      <v-btn value="skills">Skills</v-btn>
      <!--<v-btn value="hobbies">Hobbies</v-btn>-->

      <v-btn v-if="bugClicked" value="discover">Discover</v-btn>
      <img class="flySwatterCursor" v-if="!bugClicked" @click="bugClicked=!bugClicked" width="30px" height="30px" src = "../assets/bug.svg"/>
      <!--<a v-if="currentSection==='discover'" href='https://open.spotify.com/playlist/6W0bXilSfcpwPhFXaAUPWo?si=3eb239f835cd49dd' ><img class="catHeadphonesCursor"  width="30px" height="30px" src = "../assets/disc.svg"/></a>-->
      </v-btn-toggle>
    </v-col>
    </v-container>
    <v-container>
      <home-page v-if="currentSection==='home'"/>
      <c-v-page v-if="currentSection==='cv'"/>
      <work-experience-page v-if="currentSection==='workexperience'"/>
      <discover-page v-if="currentSection==='discover'"/>
      <skills-page v-if="currentSection==='skills'"/>
      <hobbies-page v-if="currentSection==='hobbies'"/>


      <!-- ideas: publications, current projects-->
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HomePage from "../components/HomePage.vue";
import CVPage from "../components/CVPage.vue";
import DiscoverPage from "../components/DiscoverPage.vue";
import WorkExperiencePage from "../components/WorkExperiencePage.vue";
import SkillsPage from "../components/SkillsPage.vue";
import HobbiesPage from "../components/HobbiesPage.vue";


export default Vue.extend({
  name: "home-view",

  components: {
    HomePage,
    CVPage,
    DiscoverPage,
    WorkExperiencePage,
    SkillsPage,
    HobbiesPage
  },
  data() {
    return {
      currentSection: 'home',
      bugClicked: false
    }
  },
});
</script>
<style scoped>
.flySwatterCursor{
  cursor:url('../assets/fly_swatter.cur'), auto;
}
.catHeadphonesCursor{
  cursor: url('http://www.rw-designer.com/cursor-extern.php?id=40137'), auto;
}
</style>