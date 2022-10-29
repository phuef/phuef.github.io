<template>
  <div>
      <v-container>
          <v-row no-gutters>
              <v-col cols="4">
                   <v-card>
                        <v-card-title>Who am I?</v-card-title>
                        <v-col
                                cols="12"
                            >
                                <v-avatar size="72px">
                                    <img
                                    alt="Avatar"
                                    src="../assets/Resume picture.png">
                                </v-avatar>
                                <em>
                                    Phil Hüffer
                                    ({{getAge("2000-04-13")}})
                                </em>
                        </v-col> <!--avatar-->
                        <v-card-subtitle>M.Sc. Student </v-card-subtitle>
                   </v-card>
              </v-col>
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
  name: "HomeView",
  methods:{
      getAge: function(dateString: string) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
}
  }
});
</script>
