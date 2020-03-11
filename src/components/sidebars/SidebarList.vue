<template>
  <div class="profile">
    <div class="profile__content">
      <h5 class="profile__heading">Group Portfolio</h5>
      <div class="profile__name">
        <font-awesome-icon class="profile__icon" icon="angle-left" />
        <h3>Chris</h3>
      </div>
      <h6 class="profile__sub-heading">Projects List</h6>
      <div class="projects__list">

        <!-- LIST OF PROJECTS GOES HERE -->

      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
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

  h3 {
    font-size: 35px;
    font-weight: 700;
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

  &__icon {
    margin-right: 1rem;
    font-size: 35px;
  }

}
</style>
