<template>
    <div class="discover">
      <v-container>
        <v-row>
          <v-col cols=4 offset="4"> 
                   <v-card>
                   <v-card-title>Discover my creative space</v-card-title>
                   <v-card-subtitle> <router-link
                                        to="/randompicture"
                                    >
                                        get random pictures
                                    </router-link> </v-card-subtitle>
                   <v-card-subtitle> get random black and white pictures </v-card-subtitle>
                   </v-card>
                </v-col>
        </v-row>
      </v-container>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "DiscoverPage",
})
</script>