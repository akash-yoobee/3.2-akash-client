
<template>

  <div class="project">
    <div class="project__heading">
      <h1 class="project__heading-text">{{ projects.name }}</h1>
    </div>
    <div class="projects"></div>
  </div>

</template>

<script>

// import Btn from "./button/Btn"
// import Projects from "./Projects"

// export default {
//   name: "Project",
//   data: {
//     project: 'Black Estate'
//   }
// };

</script>

<style scoped lang="scss">

.project {
  padding: 0 6rem;

  &__heading-text {
    font-family: "Raleway", sans-serif;
    font-size: 80px;
    font-weight: bold;
  }
}

</style>