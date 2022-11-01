<template>
    <div class="discover">
      <v-container>
        <v-row>
          <v-col cols=6> 
                   <v-card>
                   <v-card-title>Congrats on finding this secret page!</v-card-title>
                   <v-card-text>It bugs me a bit that it was this easy for you to find this page. Here you can find different stuff, e.g. my favorite music and projects. Have fun exploring :)    </v-card-text>
                   </v-card>
                </v-col>
        
          <v-carousel v-model="model">
              <v-carousel-item
              class="catHeadphonesCursor"
              >
                  <v-sheet
                      color="cyan darken-3"
                      height="100%"
                      tile
                  >
                   <v-container cyan lighten-3>
                     <v-row >
                       <v-col cols=12>
                         <div class="text-h2"  align="center">some of my favorite playlists:</div>
                       </v-col>
                       <v-card cols=2 color="cyan lighten-2">
                          <v-card-title><a href="https://open.spotify.com/playlist/6W0bXilSfcpwPhFXaAUPWo?si=73eb4f7532694a8b" target="_blank">All time favorites</a></v-card-title>
                          <v-card-subtitle>Songs I can listen to no matter the location or occasion.</v-card-subtitle>
                        </v-card>
                        <v-card cols=2 color="cyan lighten-1">
                          <v-card-title><a href="https://open.spotify.com/playlist/4z7zV4bahNaXcq2mBlvmaO?si=ebdbfc6701db44d8"> Sounddesign</a></v-card-title>
                          <v-card-subtitle> Songs with an interesting sounddesign. </v-card-subtitle> 
                        </v-card>
                        <v-card cols=2 color="cyan">
                            <v-card-title><a href="https://open.spotify.com/playlist/5qEXYNSb8plAK1JyYzwUwR?si=0b4933d2a0ee4226" target="_blank">Endance</a></v-card-title>
                            <v-card-subtitle> To enhance your mood and make you dance</v-card-subtitle> 
                        </v-card>
                    </v-row>
                  
                  </v-container>
                  </v-sheet>
              </v-carousel-item>
              <v-carousel-item v-if="false===true"
              >
                  <v-sheet
                      color="light-green darken-3"
                      height="100%"
                      tile
                  >
                      <random-picture-page  />
                  </v-sheet>
              </v-carousel-item>
              <v-carousel-item
              >
                  <v-sheet
                      color="light-green darken-3"
                      height="100%"
                      tile
                  >
                      <v-row
                      class="fill-height"
                      align="center"
                      justify="center"
                      ><v-col>
                          <div class="text-h2"  align="center">
                              <v-img height=100px width=100px src="../assets/rad_oder_regen_logo.png"></v-img> <a red href="https://rad-oder-regen.netlify.app/"> Rad oder Regen?</a>
                          </div> <br>
                          <v-divider></v-divider> <br>
                          <div class="text-h4"  align="center">
                              A project developed during the two-day <i>ifgihack 2022</i> (a Hackathon from ifgi). 
                          </div>
                          </v-col>
                      </v-row>
                  </v-sheet>
              </v-carousel-item>
                
              <v-carousel-item
              >
                  <v-sheet
                      color="cyan darken-3"
                      height="100%"
                      tile
                  >
                      <v-row
                      class="fill-height"
                      align="center"
                      justify="center"
                      ><v-col>
                          <div class="text-h2"  align="center">
                              To be continued...
                          </div>
                        </v-col>
                      </v-row>
                  </v-sheet>
              </v-carousel-item>
          </v-carousel>
          </v-row>
      </v-container>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import RandomPicturePage from "../components/RandomPicturePage.vue";
export default Vue.extend({
  components:{RandomPicturePage},
  name: "DiscoverPage",
  data(){
    return{
      model:0,
      colors:["cyan darken-3","deep-orange lighten-3"]
    }
  }
})
</script>
<style>
.catHeadphonesCursor{
  cursor: url('http://www.rw-designer.com/cursor-extern.php?id=40137'), auto;
}
</style>