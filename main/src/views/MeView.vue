<template>
  <div class="me">
    <me-page />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MePage from "../components/MePage.vue";

export default Vue.extend({
  name: "me-view",

  components: {
    MePage,
  },
});
</script>