<template>
  <div>
    <v-container>
      <home-page />
      <!--<img class="flySwatterCursor" v-if="!bugClicked" @click="bugClicked=!bugClicked" width="30px" height="30px" src = "../assets/bug.svg"/>
    -->
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HomePage from "../components/HomePage.vue";

export default Vue.extend({
  name: "home-view",

  components: {
    HomePage,
  },
  data() {
    return {
      bugClicked: false,
    };
  },
});
</script>
<style scoped>
.flySwatterCursor {
  cursor: url("../assets/fly_swatter.cur"), auto;
}
.catHeadphonesCursor {
  cursor: url("http://www.rw-designer.com/cursor-extern.php?id=40137"), auto;
}
</style>
