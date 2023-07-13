<template>
  <div class="cv">
    <v-timeline align-top dense>
      <v-timeline-item color="blue">
        <template v-slot:icon>
          <v-avatar>
            <v-img
              src="https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Blank&facialHairType=Blank&clotheType=ShirtScoopNeck&clotheColor=Gray02&eyeType=Surprised&eyebrowType=RaisedExcitedNatural&mouthType=ScreamOpen&skinColor=Pale"
            ></v-img>
          </v-avatar>
        </template>
        <v-row class="pt-1">
          <v-col cols="3">
            <strong>13th April 2000</strong>
          </v-col>
          <v-col>
            <strong>Birth</strong> <v-icon>mdi-cake</v-icon>
            <div class="text-caption mb-2">
              <v-icon small>mdi-message-outline</v-icon>
              <i> "wow he has big feet"</i> - midwife quote, right after my
              birth <br /><v-icon small>mdi-map-marker-outline</v-icon>
              Gütersloh
            </div>
          </v-col>
        </v-row>
      </v-timeline-item>
      <v-timeline-item color="blue">
        <template v-slot:icon>
          <v-avatar>
            <img
              src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=Blonde&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Gray02&eyeType=Default&eyebrowType=Default&mouthType=Disbelief&skinColor=Pale"
            />
          </v-avatar>
        </template>
        <v-row class="pt-1">
          <v-col cols="3">
            <strong>2006 - 2009</strong>
          </v-col>
          <v-col>
            <strong>Elementary School</strong> <v-icon>mdi-school</v-icon>
            <div class="text-caption mb-2">
              <v-icon small>mdi-message-outline</v-icon
              ><i> "poet and thinker"</i> - my class teacher's prediction of
              what I become <br /><v-icon small>mdi-map-marker-outline</v-icon>
              <a href="https://brueder-grimm-schule-wd.de/">Brüdergrimmschule</a
              >, Rheda-Wiedenbrück
            </div>
          </v-col>
        </v-row>
      </v-timeline-item>
      <v-timeline-item color="blue">
        <template v-slot:icon>
          <v-avatar>
            <img
              src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Blank&hairColor=Blonde&facialHairType=Blank&clotheType=Hoodie&clotheColor=Gray02&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Pale"
            />
          </v-avatar>
        </template>
        <v-row class="pt-1">
          <v-col cols="3">
            <strong>2009 - 2017</strong>
          </v-col>
          <v-col>
            <strong>High School</strong> <v-icon>mdi-school</v-icon>
            <div class="text-caption mb-2">
              <v-icon small>mdi-notebook-multiple</v-icon>
              <i> Math, Geography, Informatics and German</i> - my graduation
              subjects<br />
              <v-icon small>mdi-map-marker-outline</v-icon>
              <a href="https://www.ratsgymnasium.com/">Ratsgymnasium</a>,
              Rheda-Wiedenbrück
            </div>
          </v-col>
        </v-row>
      </v-timeline-item>
      <v-timeline-item color="blue">
        <template v-slot:icon>
          <v-avatar>
            <img
              src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=Blonde&facialHairType=BeardLight&facialHairColor=Blonde&clotheType=Hoodie&clotheColor=Gray02&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Pale"
            />
          </v-avatar>
        </template>
        <v-row class="pt-1">
          <v-col cols="3">
            <strong>2017 - 2022</strong>
          </v-col>
          <v-col>
            <strong>B.Sc. in Geoinformatics</strong> <v-icon>mdi-school</v-icon>
            <div class="text-caption mb-2">
              <v-icon small>mdi-notebook-multiple</v-icon>
              <i> A search engine for web-based interactive visualizations</i> -
              the topic of my bachelor thesis <br />
              <v-icon small>mdi-information</v-icon>
              <a href="https://bachelor-geoinformatik.de/"> more information</a
              ><br />
              <v-icon small>mdi-map-marker-outline</v-icon> University Münster
            </div>
          </v-col>
        </v-row>
      </v-timeline-item>
      <v-timeline-item color="blue">
        <template v-slot:icon>
          <v-avatar>
            <img
              src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Blank&hairColor=Blonde&facialHairType=BeardLight&facialHairColor=Blonde&clotheType=Hoodie&clotheColor=Gray02&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Pale"
            />
          </v-avatar>
        </template>
        <v-row class="pt-1">
          <v-col cols="3">
            <strong>2022 - today</strong>
          </v-col>
          <v-col>
            <strong>M.Sc. in Geoinformatics and Spatial Data Science</strong>
            <v-icon>mdi-school-outline</v-icon>
            <div class="text-caption mb-2">
              <v-icon small>mdi-information</v-icon>
              <a href="https://master-geoinformatics.com/"> more information</a
              ><br />
              <v-icon small>mdi-map-marker-outline</v-icon> University Münster
            </div>
          </v-col>
        </v-row>
      </v-timeline-item>
      <v-timeline-item>
        <template v-slot:icon>
          <v-avatar>
            <img
              src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Blank&hairColor=Blonde&facialHairType=BeardLight&facialHairColor=Blonde&clotheType=Hoodie&clotheColor=Gray02&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Pale"
            />
          </v-avatar>
        </template>
        <v-row class="pt-1">
          <v-col cols="3">
            <strong>2023</strong>
          </v-col>
          <v-col>
            <strong>First paper publication</strong>
            <v-icon>mdi-book</v-icon>
            <div class="text-caption mb-2">
              <v-icon small>mdi-information</v-icon>
              <a href="/publications"> more information</a>
            </div>
          </v-col>
        </v-row>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "CVPage",
});
</script>
