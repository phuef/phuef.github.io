<template>
  <div>
      <v-container>
          <v-row>
              <v-col a="2" cols="12" >
                   <v-card>
                        <v-card-title>Welcome to my website :)</v-card-title>
                        <v-card-subtitle class="red--text"> <v-icon color="red">mdi-alert</v-icon> This website is still under construction. It wasn't developed testdriven and doesn't use clean code, so be on the lookout for bugs/unwanted features. </v-card-subtitle>
                        <v-card-text><strong>About me</strong>: When I was young, I used to be the curious kid that always annoyed people by asking why. Why does this work this way, why can't this be different. If something didn't work the way I wanted it to, I tried to find a way to make it work. 
                            Even today I'm still eager to figure out everything and solve problems out there. Let me solve problems for you. 
</v-card-text>
                                <v-col cols="12">                               
                                    <v-avatar size="72px">
                                        <img
                                        alt="Avatar"
                                        src="../assets/Resume picture.png">
                                    </v-avatar>
                                    <i class="text-center">
                                        Phil Hüffer
                                        ({{getAge("2000-04-13")}}), M.Sc. Student of Geoinformatics and Spatial Data Science
                                    </i>
                                </v-col>
                        <v-card-subtitle> Get in touch with me: 
                            <a href="mailto:phil.hueffer@gmail.com"><v-icon >mdi-email</v-icon></a>
                            <a href="https://www.linkedin.com/in/phil-hüffer"><v-icon >mdi-linkedin</v-icon></a>
                            <a href="https://www.instagram.com/hufferphil/"><v-icon >mdi-instagram</v-icon></a>
                            <a href="https://github.com/phuef/"><v-icon >mdi-github</v-icon></a>

                            <!--<a href="https://soundcloud.com/user-220332772"><v-icon large>mdi-soundcloud</v-icon></a>-->
                        </v-card-subtitle>
                   </v-card>
                   <v-spacer></v-spacer>
                </v-col>
                <!--<v-col a="2" cols="12" md="6" lg="6" xl="4">
                    <v-card>
                        <v-card-title>Get in touch with me here:</v-card-title>
                        <v-col cols="12">
                            <a href="https://www.linkedin.com/in/phil-hüffer"><v-icon large>mdi-linkedin</v-icon></a>
                            <a href="https://www.instagram.com/hufferphil/"><v-icon large>mdi-instagram</v-icon></a>
                            <a href="https://soundcloud.com/user-220332772"><v-icon large>mdi-soundcloud</v-icon></a>
                            <a href="mailto:phil.hueffer@gmail.com"><v-icon large>mdi-email</v-icon></a>
                        </v-col>
                        <v-card-subtitle> </v-card-subtitle>
                   </v-card>
                </v-col>
                -->
              
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
