<template>
  <div class="cv">
    <v-timeline align-top dense>
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
            <strong>two weeks during 9th class</strong>
          </v-col>
          <v-col>
            <strong
              >Internship </strong
            >at district administration of geoinformation, cadastre
              and surveying
            <v-icon>mdi-city</v-icon>
            <div class="text-caption mb-2">
              <v-icon small>mdi-information-outline</v-icon> Assistance in
              various areas. E.g. field work with surveyors and working with GIS
              programs. <br /><v-icon small>mdi-map-marker-outline</v-icon>
              <a
                href="https://www.kreis-guetersloh.de/themen/geoinformation-kataster-und-vermessung/"
              >
                Kreisverwaltung Gütersloh</a
              >, Gütersloh
            </div>
          </v-col>
        </v-row>
      </v-timeline-item>
      <v-timeline-item color="blue">
        <template v-slot:icon>
          <v-avatar>
            <v-img
              src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=Blonde&facialHairType=BeardLight&facialHairColor=Blonde&clotheType=Hoodie&clotheColor=Gray02&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Pale"
            ></v-img>
          </v-avatar>
        </template>
        <v-row class="pt-1">
          <v-col cols="3">
            <strong>08.2018 - 09.2018</strong>
          </v-col>
          <v-col>
            <strong>Factory Worker</strong> <v-icon>mdi-factory</v-icon>
            <div class="text-caption mb-2">
              <v-icon small>mdi-information-outline</v-icon> Doing supporting
              work in a factory, during my semester break. <br /><v-icon small
                >mdi-map-marker-outline</v-icon
              >
              <a href="https://www.nielsen-design.de/"> Nielsen Design GmbH</a>,
              Rheda-Wiedenbrück
            </div>
          </v-col>
        </v-row>
      </v-timeline-item>
      <v-timeline-item color="blue">
        <template v-slot:icon>
          <v-avatar>
            <v-img
              src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Blank&hairColor=Blonde&facialHairType=BeardLight&facialHairColor=Blonde&clotheType=Hoodie&clotheColor=Gray02&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Pale"
            ></v-img>
          </v-avatar>
        </template>
        <v-row class="pt-1">
          <v-col cols="3">
            <strong>05.2019 - 04.2022</strong>
          </v-col>
          <v-col>
            <strong>Student Assistant </strong>as software developer
            <v-icon>mdi-code-not-equal-variant</v-icon>
            <div class="text-caption mb-2">
              <v-icon small>mdi-information-outline</v-icon> Assisting in
              scrum-based projects with the main activity of a software
              developer. Developing features and adjusting already existing ones
              for customers. As well as presenting the developed results for the customers.<br />
              <v-icon small>mdi-code-tags</v-icon>
              JavaScript/TypeScript, Vuejs, HTML, CSS <br />
              <v-icon small>mdi-information-outline</v-icon> Using and
              developing components for map.apps, which is built on the ArcGIS
              API for JavaScript. <br /><v-icon small
                >mdi-map-marker-outline</v-icon
              >
              <a href="https://www.con-terra.com/">con terra GmbH</a>, Münster
            </div>
          </v-col>
        </v-row>
      </v-timeline-item>
      <v-timeline-item color="blue">
        <template v-slot:icon>
          <v-avatar>
            <v-img
              src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Blank&hairColor=Blonde&facialHairType=BeardLight&facialHairColor=Blonde&clotheType=Hoodie&clotheColor=Gray02&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Pale"
            ></v-img>
          </v-avatar>
        </template>
        <v-row class="pt-1">
          <v-col cols="3">
            <strong>05.2023 - 09.2023</strong>
          </v-col>
          <v-col>
            <strong>Tutor </strong>for the lecture geosoftware
            <v-icon>mdi-account-group</v-icon>
            <div class="text-caption mb-2">
              <v-icon small>mdi-information-outline</v-icon> Correcting and
              evaluating students' submissions, as well as advising and
              assisting them<br />
              <v-icon small>mdi-map-marker-outline</v-icon>
              <a href="https://www.uni-muenster.de/en/">University Münster</a>,
              Münster
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
  name: "WorkExperiencePage",
});
</script>
