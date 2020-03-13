<template>
  <div class="pagespeed">
    <div class="pagespeed__header">
    <ProjectHeader />
    </div>
    <p class="pagespeed__subheading">Page Speed Insights Results</p>

    <div class="pagespeed__metrics">
      <div v-for="data in metrics" :key="data.name">
        <img :src="data.image" />
      </div>
    </div>
  </div>
</template>

<script>
import ProjectHeader from "./headers/ProjectHeader";

export default {
  name: "Pagespeed",
  components: {
    ProjectHeader
  },
  data() {
    return {
      metrics: [
        {
          name: "metric 1",
          image: "https://i.ibb.co/WvmLyJY/image.png"
        },
        {
          name: "metric 2",
          image: "https://i.ibb.co/x3fNkhm/image.png"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
@import "../assets/scss/_variables";

.pagespeed {
  background: $global-background;
  padding: 2rem 6rem 4rem;
  height: 100vh;
  width: 80vw;
  &__header {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 2rem 0rem 2rem 0rem;
  }
  &__buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1.5rem;
    padding: 2rem 0rem 0rem 35rem;
  }
  &__heading {
    text-transform: uppercase;
    font-size: 4vw;
    font-weight: 600;
    font-family: "Poppins", sans-serif;
  }
  &__subheading {
    text-transform: capitalize;
    font-size: 1.5vw;
    font-weight: 400;
    font-family: "Raleway", sans-serif;
  }
  &__metrics {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background: white;
    padding: 1rem 0rem 0rem 0rem;
    box-shadow: $global-box-shadow;
    transition: ease-in-out 0.3s;
    &:hover {
      transform: scale(1.02);
      transition: ease-in-out 0.3s;
    }
  }
}
</style>