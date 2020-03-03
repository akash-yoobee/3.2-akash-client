<template>
  <div class="projects">
    <div class="projects__header">
      <h1 class="projects__heading">Projects</h1>
      <div class="projects__button">
        <Btn text="Back to home" />
      </div>
    </div>
    <div class="projects__list-wrapper">
      <div class="projects__grid">
        <div v-for="project in projects" :key="project.name" class="projects__item">
          <!-- <img src="../assets/images/loomdigital.co.uk-1.jpg" > -->
          <img :src="project.image" >
          <h3>{{project.name}}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Btn from "./button/Btn";

export default {
  name: "Projects",
  components: {
    Btn
  },
  data() {
    return {
      projects: [
        {
          name: "project 1",  
          image: "../assets/images/syscoin.jpg"
        },
        {
          name: "project 2",
          image: "../assets/images/loomdigital.co.uk-1.jpg"
        },
        {
          name: "project 3",
          image: "../assets/images/territoryprojects.com-1.jpg"
        },
        {
          name: "project 4",
          image: "../assets/images/feroxcorp.com-1.jpg"
        }
      ]
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