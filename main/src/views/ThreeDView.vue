<template>
  <div>
    <three-d-page />
    <!--<img class="flySwatterCursor" v-if="!bugClicked" @click="bugClicked=!bugClicked" width="30px" height="30px" src = "../assets/bug.svg"/>
    -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import threeDPage from "../components/3DPage.vue";

export default Vue.extend({
  name: "three-d-view",

  components: {
    threeDPage,
  },
});
</script>
