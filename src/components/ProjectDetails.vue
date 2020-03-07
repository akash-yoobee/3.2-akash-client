
<template>
  <div class="project">
    <div class="project__heading">
      <h1 class="project__heading-text">{{ project.name }}</h1>
      <div class="project__button">
        <Btn text="Visit Website" href />
        <Btn text="View Pagespeed" href />
      </div>
    </div>
    <h2 class="project__heading-sub">"{{ project.slogan }}"</h2>
    <div class="project__body">
      <p>{{ project.body }}</p>
    </div>
    <div class="project__grid">
      <img :src="project.image" />
      <img :src="project.imageMobile" />
    </div>
    <div class="projects"></div>
  </div>
</template>

<script>
import Btn from "./button/Btn";
// import Projects from "./Projects"

export default {
  name: "ProjectDetails",
  components: {
    Btn
  },
  data() {
    return {
      project: {
        name: "Black Estate",
        slogan: "A fantastic place to drink wine",
        body:
          "Hi my name is Anton and I really like golf and this one time I hit a hole in one I hope I made Tiger Woods proud. Hi my name is Anton and I really like golf and this one time I hit a hole in one I hope I made Tiger Woods proud. Did I mention that I like golf?",
        image:
          "https://s3-us-west-1.amazonaws.com/nerby-test/wp-content/uploads/2015/04/15170403/Nike-42.jpg",
        imageMobile:
          "https://www.chrishansolutions.com/assets/images/basketball.png"
      }
    };
  }
};
</script>

<style scoped lang="scss">
.project {
  padding: 2rem 6rem 2rem;

  &__heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__button {
    display: grid;
    grid-template-columns: 1;
    grid-gap: 2rem;
  }

  &__heading-text {
    font-family: "Poppins", sans-serif;
    font-size: 80px;
    font-weight: bold;
  }

  &__heading-sub {
    padding: 0.5rem 0;
    font-family: "Raleway", sans-serif;
    text-transform: none;
  }

  &__body {
    padding: 0.5rem 0;
    font-family: "Raleway", sans-serif;
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