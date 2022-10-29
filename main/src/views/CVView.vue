<template>
  <div class="cv">
    <c-v-page />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CVPage from "../components/CVPage.vue";

export default Vue.extend({
  name: "c-v-view",

  components: {
    CVPage,
  },
});
</script>
