<template>
  <div class="hobbies">
    <hobbies-page />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HobbiesPage from "../components/HobbiesPage.vue";

export default Vue.extend({
  name: "hobbies-view",

  components: {
    HobbiesPage,
  },
});
</script>