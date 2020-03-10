<template>
  <div class="project">
    <div class="project__heading">
      <h1 class="project__heading-text">{{ project.name }}</h1>
      <div class="project__button">
        <Btn text="Visit Website" />
        <Btn text="View Pagespeed" />
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
import { EventBus } from "../main"

export default {
  name: "ProjectDetails",
  components: {
    Btn
  },
  created () {
    EventBus.$emit('changePage', 'list')
  },
  data() {
    return {
      props: ['projectDetails'],
      project: {
        name: "Black Estate",
        slogan: "A fantastic place to drink wine",
        body:
          "Hi my name is Anton and I really like golf and this one time I hit a hole in one I hope I made Tiger Woods proud. Hi my name is Anton and I really like golf and this one time I hit a hole in one I hope I made Tiger Woods proud. Did I mention that I like golf? I hope I made Tiger Woods proud. Did I mention that I like golf?",
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
    margin-top: 2rem;
  }

  &__button {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 2rem;
    justify-items: center;
  }

  &__heading-text {
    font-family: "Poppins", sans-serif;
    font-size: 80px;
    font-weight: bold;
    color: #222222;
  }

  &__heading-sub {
    padding: 0.5rem 0 1.5rem;
    font-family: "Raleway", sans-serif;
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
    color: #2B2B2B
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