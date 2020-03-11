<template>
  <div class="profile">
    <div class="profile__content">
      <router-link :to="{name: 'home'}"><h5 class="profile__heading">Group Portfolio</h5></router-link>
      <div class="profile__name">
        <BackArrow link="home"/>
        <h3>Chris</h3>
      </div>
      <h6 class="profile__sub-heading">Profile</h6>
      <div class="profile__image-container">
        <img src="https://i.ibb.co/r0HhLrw/profile-pic-2.png" alt />
      </div>
      <p class="profile__text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
        natus accusamus minima neque quo exercitationem, pariatur voluptatem
        impedit in iste distinctio! Aliquid assumenda temporibus nostrum earum
        nesciunt incidunt harum esse praesentium, inventore iure error odit
        corporis beatae eaque voluptatum vitae corrupti! Iste, doloremque odit?
        Ad aliquam pariatur perspiciatis obcaecati quaerat.
      </p>
    </div>
    <div class="profile__footer">
      <Btn text="Contact" modifier="light" />
      <!-- <div class="profile__footer-icon"><font-awesome-icon class="profile__icon-footer" :icon="['fab', 'facebook-square']" /></div>
      <div class="profile__footer-icon"><font-awesome-icon class="profile__icon-footer" :icon="['fab', 'facebook-square']" /></div> -->
    </div>
  </div>
</template>

<script>
import Btn from "../button/Btn";
import BackArrow from '../backArrow/BackArrow'
export default {
  components: {
    Btn,
    BackArrow
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
  &__image-container {
    margin-bottom: 2rem;
  }

  &__icon {
    margin-right: 1rem;
    font-size: 35px;
  }
  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__icon-footer {
    font-size: 35px;
  }
  &__text {
    font-family: "Raleway";
    opacity: 0.85;
    line-height: 1.5;
  }
}
</style>
