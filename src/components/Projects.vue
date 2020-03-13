<template>
  <div class="projects">
    <div class="projects__header">
      <h1 class="projects__heading">Projects</h1>
      <h1>{{ article.title }}</h1>
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
          <img :src="project.image" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Btn from "./button/Btn";
import { EventBus } from "../main";
export default {
  name: "Projects",
  components: {
    Btn
  },
  created() {
    EventBus.$emit("changePage", "profile");
    const userName = this.$route.params.articleId;
    // to get all frojects by this user
    // const useName = this.$route.params.articleId;
    // created: async function() {
    // this.article = await this.getArticle(articleId);
    // this.usersProjects = await this.getArticle(articleId);
  },
  data() {
    return {
      projects: [
        {
          name: "project 1",
          image: "https://i.ibb.co/BZR193C/syscoin.jpg",
          path: "/projectDetails"
        },
        {
          name: "project 2",
          image: "https://i.ibb.co/vVfPb77/skullandroses-com-1.jpg",
          path: "/projectDetails"
        },
        {
          name: "project 3",
          image: "https://i.ibb.co/0QDKqP5/chronicled-com-17.jpg",
          path: "/projectDetails"
        },
        {
          name: "project 4",
          image: "https://i.ibb.co/njkHptC/feroxcorp-com-1.jpg",
          path: "/projectDetails"
        }
      ]
      // usersProjects: {}
    };
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