<template>
  <div class="about">
    <about-page />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AboutPage from "../components/AboutPage.vue";

export default Vue.extend({
  name: "about-view",

  components: {
    AboutPage,
  },
});
</script>