<template>
    <div>
        <v-container>
      <h3 text-align="center">Click on the picture to get another picture</h3>

      <img class="picsumpicture" src="https://picsum.photos/800/500" onclick="location.reload()"/>  
    </v-container>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "RandomPicturePage",
})
</script>