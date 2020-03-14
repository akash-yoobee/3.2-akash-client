<template>
  <div class="profile">
    <div class="profile__content">
      <router-link :to="{name: 'home'}"><h5 class="profile__heading">Group Portfolio</h5></router-link>
      <div class="profile__name">
        <BackArrow link="projects"/>
        <h3>Chris</h3>
      </div>
      <h6 class="profile__sub-heading">PROJECTS LIST</h6>
            <router-link :to="{name: 'projectdetails'}" v-for="project in projects" :key="project.image">
            <img :src="project.image" class="project__images"/>
            </router-link>
      </div>
    </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      projects: [
        {
          name: "project1",
          image:
            "https://cdn.dribbble.com/users/387239/screenshots/5183805/nikedribbble_2x.png"
        },
        {
          name: "project2",
          image:
            "https://cdn.dribbble.com/users/387239/screenshots/5183805/nikedribbble_2x.png"
        },
        {
          name: "project3",
          image:
            "https://cdn.dribbble.com/users/387239/screenshots/5183805/nikedribbble_2x.png"
        },
        {
          name: "project4",
          image:
            "https://cdn.dribbble.com/users/387239/screenshots/5183805/nikedribbble_2x.png"
        }
      ]
    };
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
  height: 100vh;

  &__head {
    padding-top: 0.8rem;
  }

  &__heading {
    font-size: 25px;
    font-weight: 300;
    margin-bottom: 0.2rem;
    opacity: 0.85;
  }
  &__sub-heading {
    font-size: 20px;
    font-weight: 400;
    margin: 1.5rem 0 2rem 0;
    opacity: 0.85;
    text-transform: none;
    // letter-spacing: 1.5px;
    font-family: "Raleway";
  }
  &__name {
    display: flex;
    align-items: center;
    margin-bottom: 0rem;
  }

  h3 {
    font-size: 45px;
    font-weight: 600;
  }

  &__icon {
    margin-right: 1rem;
    font-size: 35px;
  }
}

.project {
  &__select {
    margin-bottom: 1.5rem;
  }

  &__images {
    margin-bottom: 1.5rem;
  }
}
</style>
