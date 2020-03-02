<template>
  <div class="projects">
    <h1 class="projects__heading">Projects</h1>
    <div class="projects__list-wrapper">
      <div class="projects__grid">
          <div class="projects__item">
              <img src="../assets/images/syscoin.org-18.jpg">
          </div>
          <div class="projects__item">
              <img src="../assets/images/loomdigital.co.uk-1.jpg">
          </div>
          <div class="projects__item">
              <img src="../assets/images/territoryprojects.com-1.jpg">
          </div>
          <div class="projects__item">
              <img src="../assets/images/feroxcorp.com-1.jpg">
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">

.projects{
    padding: 0 6rem;
    &__grid{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 4rem;
    }
    &__item{

    }
    
}

</style>