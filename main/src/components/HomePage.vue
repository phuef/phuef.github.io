<template>
  <div src="../assets/Resume picture.png">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          xl="4"
          lg="4"
          md="4"
          sm="6"
          xs="12"
          class="d-flex flex-shrink-1 flex-grow-1 .align-stretch pr-0"
        >
          <v-card heigth="100%" width="100%">
            <img
              center
              max-width="100px"
              width="100%"
              alt="Avatar"
              src="../assets/Resume picture.png"
            />
            <v-list>
              <v-list-item>
                <div>Phil Hüffer ({{ getAge("2000-04-13") }})</div>
              </v-list-item>
              <v-list-item>
                M.Sc. Student of Geoinformatics and Spatial Data
                Science</v-list-item
              >
              <v-card-text>
                <v-icon small>mdi-map-marker</v-icon> Münster, Germany
                <br />
                <v-btn icon href="mailto:phil.hueffer@gmail.com"
                  ><v-icon>mdi-email</v-icon></v-btn
                >
                <v-btn icon href="https://www.linkedin.com/in/phil-hüffer"
                  ><v-icon>mdi-linkedin</v-icon></v-btn
                >
                <v-btn icon href="https://www.instagram.com/hufferphil/"
                  ><v-icon>mdi-instagram</v-icon></v-btn
                >
                <v-btn icon href="https://github.com/phuef/"
                  ><v-icon>mdi-github</v-icon></v-btn
                >
              </v-card-text>
            </v-list>
          </v-card>
        </v-col>
        <v-col cols="12" xl="8" lg="8" md="8" sm="6" xs="12">
          <v-card class="mb-2">
            <v-card-title>About me</v-card-title>
            <v-card-text class="text-h6"
              >When I was young, I used to be the curious kid that always
              annoyed people by asking why. Why does this work this way, why
              can't this be different. If something didn't work the way I wanted
              it to, I tried to find a way to make it work. Even today I'm still
              eager to figure out everything and solve problems out there. Let
              us solve problems together :)
            </v-card-text>
          </v-card>
          <!--<v-card class="mb-2">
            <v-card-title>My beliefs</v-card-title>
            <v-card-text class="text-h6"
              >
              "Treat every living being as you would like to be treated yourself"

            </v-card-text>
          </v-card>-->
          <v-spacer></v-spacer>
          <v-card>
            <v-card-title>My motto</v-card-title>
            <v-card-text class="text-h6">
              "Be the change you want to see" <!--<br>
              "Treat every living being as you would like to be treated yourself" <br>
              "Life isn’t about waiting for the storm to pass. It’s about dancing in the rain."-->
            </v-card-text>
          </v-card>
          <!--<v-card class="mb-2">
            <v-card-title>My values</v-card-title>
            <v-card-text class="text-h6"
              >
              Sustainability, 

            </v-card-text>
          </v-card>-->
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "HomeView",
  methods: {
    getAge: function (dateString: string) {
      var today = new Date();
      var birthDate = new Date(dateString);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    },
  },
});
</script>
