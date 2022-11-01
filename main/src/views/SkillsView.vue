<template>
  <div class="skills">
    <skills-page />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillsPage from "../components/SkillsPage.vue";

export default Vue.extend({
  name: "skills-view",

  components: {
    SkillsPage,
  },
});
</script>