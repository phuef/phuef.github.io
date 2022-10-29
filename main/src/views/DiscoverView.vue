<template>
  <div class="dicover">
    <discover-page />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import DiscoverPage from "../components/DiscoverPage.vue";

export default Vue.extend({
  name: "discover-view",

  components: {
    DiscoverPage,
  },
});
</script>
