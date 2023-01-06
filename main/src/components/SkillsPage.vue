<template>
  <v-container>
    <v-row>
      <v-col cols="12" xl="2" lg="3" md="3" sm="6" xs="12">
        <v-card color="grey lighten-4">
          <v-card-title>Programming:</v-card-title>
          <v-chip
            outlined
            v-for="(programmingLanguage, index) in programmingLanguages"
            :key="index"
            class="ma-2"
            :color="programmingLanguage.color"
            :text-color="programmingLanguage.color"
            label
          >
            <v-icon left>{{ programmingLanguage.icon }}</v-icon>
            {{ programmingLanguage.name }}
          </v-chip>
          <!--<v-card-subtitle>click a language to get infos about used frameworks</v-card-subtitle>-->
        </v-card>
      </v-col>
      <v-col cols="12" xl="2" lg="3" md="3" sm="6" xs="12">
        <v-card color="green lighten-5">
          <v-card-title>Human languages:</v-card-title>
          <div v-for="(humanLanguage, index) in humanLanguages" :key="index">
            <v-chip
              class="ma-2"
              :color="humanLanguage.color"
              label
              :text-color="humanLanguage.text"
            >
              <strong>{{ humanLanguage.name }}</strong
              >: {{ humanLanguage.level }}
            </v-chip>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" xl="2" lg="3" md="3" sm="6" xs="12">
        <v-card color="cyan lighten-5">
          <v-card-title>Working in Projects:</v-card-title>
          <v-chip
            v-for="(projectManagin, index) in projectManaging"
            :key="index"
            class="ma-2"
            :color="projectManagin.color"
            label
            text-color="white"
          >
            <v-icon left>{{ projectManagin.icon }}</v-icon>
            {{ projectManagin.name }}
            <!--: {{projectManagin.level}}-->
          </v-chip>
        </v-card>
      </v-col>
      <v-col cols="12" xl="2" lg="3" md="3" sm="6" xs="12">
        <v-card color="grey lighten-4" height="100%">
          <v-card-title>Analytical:</v-card-title>
          <v-chip
            outlined
            v-for="(analytical, index) in analyticals"
            :key="index"
            class="ma-2"
            :color="analytical.color"
            label
          >
            <v-icon left>{{ analytical.icon }}</v-icon>
            {{ analytical.name }}
          </v-chip>
        </v-card>
      </v-col>
      <v-col cols="12" xl="2" lg="3" md="3" sm="6" xs="12">
        <v-card color="teal lighten-5">
          <v-card-title>Other:</v-card-title>
          <v-chip
            v-for="(other, index) in other"
            :key="index"
            class="ma-2"
            :color="other.color"
            label
            text-color="white"
          >
            <v-icon left>{{ other.icon }}</v-icon>
            {{ other.name }}
          </v-chip>
          <v-card-subtitle
            >to be continued, because I'm always eager to learn new
            skills</v-card-subtitle
          >
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "SkillsPage",
  data() {
    return {
      programmingLanguages: [
        { name: "javascript", color: "green", icon: "mdi-language-javascript" },
        { name: "typescript", color: "blue", icon: "mdi-language-typescript" },
        { name: "python", color: "pink", icon: "mdi-snake" },
        { name: "R", color: "red", icon: "mdi-alpha-r" },
        { name: "java", color: "grey", icon: "mdi-language-java" },
        { name: "html", color: "orange", icon: "mdi-language-html5" },
        { name: "css", color: "blue", icon: "mdi-language-css3" },
        { name: "sql", color: "purple", icon: "mdi-database" },
      ],
      humanLanguages: [
        {
          name: "german",
          level: "mother tongue",
          color: "orange lighten-2",
          text: "white",
        },
        {
          name: "english",
          level: "fluent",
          color: "red lighten-2",
          text: "white",
        },
        {
          name: "dutch",
          level: "basics",
          color: "blue lighten-2",
          text: "white",
        },
      ],
      projectManaging: [
        { name: "git", color: "cyan darken", icon: "mdi-git" },
        { name: "github", color: "cyan darken-1", icon: "mdi-github" },
        { name: "scrum", color: "cyan darken-2", icon: "mdi-sync-alert" },
        {
          name: "continuous development",
          color: "cyan darken-3",
          icon: "mdi-autorenew",
        },
        {
          name: "teamplayer",
          color: "cyan darken-4",
          icon: "mdi-account-group",
        },
      ],
      analyticals: [
        {
          name: "critical thinking",
          color: "",
          icon: "mdi-head-dots-horizontal-outline",
        },
        {
          name: "data analysis",
          color: "",
          icon: "mdi-database-search-outline",
        },
        { name: "(geo)statistics", color: "", icon: "mdi-chart-bar-stacked" },
        { name: "problem solving", color: "", icon: "mdi-lightbulb-outline" },
      ],
      other: [
        //organizational
        {
          name: "drivers license (B1)",
          color: "teal darken-3",
          icon: "mdi-car",
        },
        { name: "music production", color: "teal darken-3", icon: "mdi-music" },
        {
          name: "video editing",
          color: "teal darken-3",
          icon: "mdi-movie-open-edit",
        },
        { name: "", color: "", icon: "mdi-" },
      ],
    };
  },
});
</script>
