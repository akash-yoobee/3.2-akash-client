<template>
  <div class="project__heading">
    <h1 class="project__heading-text">{{ project.title }}</h1>
    <div class="project__button">
      <Btn text="Visit Website" modifier="inverse" />
      <Btn text="View Pagespeed" link="pagespeed" />
    </div>
  </div>
</template>

    <script>
import Btn from "../button/Btn";

export default {
  name: "ProjectHeader",
  components: {
    Btn
  },
  data() {
    return {
      project: {
        title: "Project Title"
      }
    };
  }
};
</script>

<style scoped lang="scss">
.project {
  padding: 2rem 6rem 2rem;
  width: 100%;

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
    margin-right: 2rem;
  }
}
</style>