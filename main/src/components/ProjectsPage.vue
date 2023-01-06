<template>
  <div class="projects">
    <v-container>
      <v-carousel v-model="model" show-arrows-on-hover>
        <!--<v-carousel-item
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
              </v-carousel-item>-->
        <v-carousel-item v-if="false === true">
          <v-sheet color="light-green darken-3" height="100%" tile>
            <random-picture-page />
          </v-sheet>
        </v-carousel-item>
        <v-carousel-item>
          <v-sheet color="#313641" height="100%" tile>
            <v-row class="fill-height" align="center" justify="center"
              ><v-col>
                <div class="text-h2 mb-2" align="center">
                  <p class="grey--text">Find your Spot</p>
                </div>
                <br />
                <v-divider color="grey"></v-divider> <br />
                <div
                  class="text-h4 grey mb-4"
                  align="center"
                  text-color="white"
                >
                  A webapp that helps citizens of Münster find their spot in the
                  city.
                </div>
                <v-divider></v-divider>
                <div class="text-h5 grey--text" align="center">
                  Developed in a course during my masters studies
                  <v-btn
                    icon
                    href="https://github.com/phuef/Geoinformation-in-Society-22"
                    ><v-icon color="grey">mdi-github</v-icon></v-btn
                  >
                </div>
              </v-col>
            </v-row>
          </v-sheet>
        </v-carousel-item>
        <v-carousel-item>
          <v-sheet color="yellow lighten-4" height="100%" tile>
            <v-row class="fill-height" align="center" justify="center"
              ><v-col>
                <div class="text-h2 mb-2" align="center">
                  <p class="yellow--text text--darken-3">
                    Reality as a basemap
                  </p>
                </div>
                <br />
                <v-divider class="yellow darken-3"></v-divider> <br />
                <div
                  class="text-h4 yellow darken-3 mb-4"
                  align="center"
                  text-color="white"
                >
                  Implementation of typical basemap features and
                  functionalities, in augmented reality (AR).
                </div>
                <div class="text-h5 yellow--text text--darken-3" align="center">
                  During a study project during my bachelor
                  <v-btn
                    icon
                    href="https://github.com/phuef/reality-as-a-basemap"
                    ><v-icon color="yellow darken-3">mdi-github</v-icon></v-btn
                  >
                </div>
              </v-col>
            </v-row>
          </v-sheet>
        </v-carousel-item>
        <v-carousel-item>
          <v-sheet color="teal darken-3" height="100%" tile>
            <v-row class="fill-height" align="center" justify="center"
              ><v-col>
                <div class="text-h2 mb-2" align="center">
                  <a
                    class="deep-purple--text text--lighten-3"
                    href="https://rad-oder-regen.netlify.app/"
                  >
                    Rad oder Regen?</a
                  >
                </div>
                <br />
                <v-divider class="deep-purple lighten-3"></v-divider>
                <br />
                <div
                  class="text-h4 deep-purple lighten-3 mb-4 teal--text darken-3--text"
                  align="center"
                >
                  A website that tells you whether you should take the bike or
                  not, with random creative sayings
                </div>
                <div
                  class="text-h5 deep-purple--text text--lighten-3"
                  align="center"
                >
                  A project developed during the two-day <i>ifgihack 2022</i> (a
                  Hackathon from ifgi).
                </div>
              </v-col>
            </v-row>
          </v-sheet>
        </v-carousel-item>

        <v-carousel-item>
          <v-sheet color="cyan darken-3" height="100%" tile>
            <v-row class="fill-height" align="center" justify="center"
              ><v-col>
                <div class="text-h2" align="center">To be continued...</div>
              </v-col>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "ProjectsPage",
  data() {
    return {
      model: 0,
      colors: ["cyan darken-3", "deep-orange lighten-3"],
    };
  },
});
</script>
<style>
.catHeadphonesCursor {
  cursor: url("http://www.rw-designer.com/cursor-extern.php?id=40137"), auto;
}
.v-carousel__controls {
  background: none;
}
</style>
