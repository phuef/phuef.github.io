<template>
  <div class="projects">
    <projects-page />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsPage from "../components/ProjectsPage.vue";

export default Vue.extend({
  name: "projects-view",

  components: {
    ProjectsPage,
  },
});
</script>
