
<template>
  <div class="project">
    <div class="project__heading">
      <h1 class="project__heading-text">{{ Project }}</h1>
    </div>
    <div class="projects"></div>
  </div>
</template>

<script>
export default {
  name: "Project"
};
</script>

<style scoped lang="scss">
.project {
  padding: 0 6rem;

  &__heading {
    font-family: "Raleway", sans-serif;
    font-size: 80px;
    font-weight: bold;
  }
}
</style>