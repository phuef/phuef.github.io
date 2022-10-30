<template>
  <div>
      <v-container>
          <v-row no-gutters>
              <v-col cols="6">
                   <v-card>
                        <v-card-title>Welcome to my website :)</v-card-title>
                        <v-card-subtitle class="red--text"> <v-icon color="red">mdi-alert</v-icon> This website is still under construction. It wasn't developed testdriven and doesn't use clean code, so be on the lookout for bugs or unwanted features. </v-card-subtitle>
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
                        </v-col>
                        <v-card-subtitle>M.Sc. Student of Geoinformatics and Spatial Data Science </v-card-subtitle>
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
