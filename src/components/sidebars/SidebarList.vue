<template>
  <div class="profile">
    <div class="profile__content">
      <router-link :to="{name: 'home'}">
        <h5 class="profile__heading">Group Portfolio</h5>
      </router-link>
      <div class="profile__name">
        <BackArrow link="projects" />
        <h3>{{ user }}</h3>
      </div>
      <h6 class="profile__sub-heading">PROJECTS LIST</h6>
      <router-link :to="{name: 'projectdetails', params: { projectId: project.id }}" v-for="project in projects" :key="project.id">
        <img :src="project.desktopImageUrl" class="project__images" />
      </router-link>
    </div>
  </div>
</template>

<script>
import BackArrow from "../backArrow/BackArrow";
import axios from "axios";
const apiBaseUrl = "http://localhost:3000/v1";

export default {
  components: {
    BackArrow
  },
  props: ["user"],
  data() {
    return {
      projects: []
    };
  },
  created: async function() {
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

<style lang="scss" scoped>
.profile {
  color: white;
  padding: 3rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;

  &__head {
    padding-top: 0.8rem;
  }

  &__heading {
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 1rem;
    opacity: 0.85;
  }
  &__sub-heading {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 2rem;
    opacity: 0.85;
  }
  &__name {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 35px;
    font-weight: 700;
  }

  &__icon {
    margin-right: 1rem;
    font-size: 35px;
  }
}

.project {
  &__select {
    margin-bottom: 1.5rem;
  }

  &__images {
    margin-bottom: 1.5rem;
  }
}
</style>
