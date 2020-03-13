<template>
  <div>
    <h4 class="account">Logged in as Akash</h4>
    <div class="profile-container">
      <div class="projects">
        <h3>Projects</h3>
        <div class="projects__list-wrapper">
          <div class="projects__grid">
            <div v-for="project in projects" :key="project.name" class="projects__item">
              <img :src="project.image" />
            </div>
          </div>
        </div>
      </div>
      <div class="profile">
        <h3>Profile</h3>
        <div class="profile__container">
            <label for="intro"></label>
            <textarea name="intro" type="textField" placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus illo eligendi eaque consectetur magnam quaerat provident laudantium laboriosam explicabo rem?" />
            
        </div>
      </div>
      <div class="profile"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "adminProfile",
  data() {
    return {
      projects: [
        {
          name: "project 1",
          image: "https://i.ibb.co/BZR193C/syscoin.jpg",
          path: "/projectDetails"
        },
        {
          name: "project 2",
          image: "https://i.ibb.co/vVfPb77/skullandroses-com-1.jpg",
          path: "/projectDetails"
        },
        {
          name: "project 3",
          image: "https://i.ibb.co/0QDKqP5/chronicled-com-17.jpg",
          path: "/projectDetails"
        },
        {
          name: "project 4",
          image: "https://i.ibb.co/njkHptC/feroxcorp-com-1.jpg",
          path: "/projectDetails"
        },
        {
          name: "project 5",
          image: "https://i.ibb.co/vVfPb77/skullandroses-com-1.jpg",
          path: "/projectDetails"
        },
        {
          name: "project 6",
          image: "https://i.ibb.co/BZR193C/syscoin.jpg",
          path: "/projectDetails"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/_variables";
.account{
    position: absolute;
    top: 1rem;
    right: 1rem;
}
.profile-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  width: 100vw;
  grid-gap: 5rem;
  padding: 2rem 6rem 4rem;
}
.profile {
    &__container{
        width: 100%;
        input{
            width: 100%;
        }
        textarea{
            width: 100%;
        }
    }
}
.projects {
  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }
  &__item {
    display: flex;
    box-shadow: $global-box-shadow;
    transition: ease-in-out 0.3s;
    &:hover {
      transform: scale(1.02);
      transition: ease-in-out 0.3s;
    }
  }
}
</style>