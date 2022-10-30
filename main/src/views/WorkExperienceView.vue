<template>
  <div class="workexperience">
    <work-experience-page />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import WorkExperiencePage from "../components/WorkExperiencePage.vue";

export default Vue.extend({
  name: "work-experience-view",

  components: {
    WorkExperiencePage,
  },
});
</script>
