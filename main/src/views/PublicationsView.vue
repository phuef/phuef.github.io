<template>
  <div class="publications">
    <publications-page />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PublicationsPage from "../components/PublicationsPage.vue";

export default Vue.extend({
  name: "publications-view",

  components: {
    PublicationsPage,
  },
});
</script>
