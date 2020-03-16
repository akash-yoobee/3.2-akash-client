<template>
  <div class="project">
    <ProjectHeader />
    <h2 class="project__heading-sub">{{ project.slogan }}</h2>
    <div class="project__body">
      <p>{{ project.body }}</p>
    </div>
    <div class="project__grid">
      <img :src="project.desktopImageUrl" />
      <img :src="project.mobileImageUrl" />
    </div>
    <div class="projects"></div>
  </div>
</template>

<script>
import ProjectHeader from "./headers/ProjectHeader"
import { EventBus } from "../main";
import axios from "axios";
import * as config from "../../config";

export default {
  name: "ProjectDetails",
  components: {
    ProjectHeader
  },
  created() {
    EventBus.$emit("changePage", "list");
  },
  data() {
    return {
      project: {
        title: "",
        slogan: "",
        body: "",
        desktopImageUrl: "",
        mobileImageUrl: ""
      }
    };
  },
  methods: {
    getProject: function(projectId) {
      return axios
        .get(`${config.apiUrl}/projects/${projectId}`)
        .then(res => {
          return res.data.project;
        })
        .catch(error => console.log(error));
    }
  }
};
</script>

<style scoped lang="scss">
.project {
  padding: 2rem 6rem 2rem;
  width: 100%;

  &__heading-sub {
    padding: 0.8rem 0 0.7rem 0;
    font-family: "Raleway", sans-serif !important;
    font-weight: 400;
    font-size: 25px;
    text-transform: none;
    color: #222222;
  }

  &__body {
    padding: 0.5rem 0;
    font-family: "Raleway", sans-serif;
    font-size: 16px;
    font-weight: 300;
    line-height: 2rem;
    color: #2b2b2b;
  }

  &__grid {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    padding: 2rem 0;
    font-family: "Raleway", sans-serif;
  }
}
</style>