<template>
  <div class="random-picture">
    <random-picture-page />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import RandomPicturePage from "../components/RandomPicturePage.vue";

export default Vue.extend({
  name: "random-picture-view",

  components: {
    RandomPicturePage,
  },
});
</script>