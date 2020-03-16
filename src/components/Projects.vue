<template>
  <div class="projects">
    <div class="projects__header">
      <h1 class="projects__heading">Projects</h1>
      <div class="projects__button">
        <Btn text="back to home" link="home" />
      </div>
    </div>
    <div class="projects__list-wrapper">
      <div class="projects__grid">
        <router-link
          :to="{name: 'projectdetails'}"
          v-for="project in projects"
          :key="project.name"
          class="projects__item"
        >
          <img :src="project.desktopImageUrl" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Btn from "./button/Btn";
import { EventBus } from "../main";

const apiBaseUrl = "http://localhost:3000/v1";

export default {
  name: "Projects",
  components: {
    Btn
  }, 
  data() {
    return {
      projects: []
    };
  },
  created: async function() {
    EventBus.$emit("changePage", "profile")
    this.projects = await this.getProjects();
  },
  methods: {
    getProjects: function() {
      return axios
        .get(`${apiBaseUrl}/projects/`)
        .then(function(response) {
          return response.data.projects;
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    }
  }
};
</script>

<style scoped lang="scss">
@import "../assets/scss/_variables";

.projects {
  padding: 2rem 6rem 4rem;
  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 4rem;
  }
  &__item {
    display: flex;
    box-shadow: $global-box-shadow;
    transition: ease-in-out 0.3s;
    &:hover {
      transform: scale(1.02);
      transition: ease-in-out 0.3s;
    }
  }
  &__header {
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>