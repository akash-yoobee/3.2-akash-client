<template>
  <div>
    <h4 class="account">Logged in as Akash | Logout</h4>
    <div class="profile-container">
      <div class="projects">
        <h3>Projects</h3>
        <div class="projects__list-wrapper">
          <div class="projects__grid">
            <div v-for="project in projects" :key="project.name" class="projects__item">
              <img :src="project.image" />
            </div>
            <router-link class="projects__new-link" :to="{name: 'adminProject'}">
              <div class="projects__new-item">
                <div class="projects__icon-wrap">
                  <font-awesome-icon class="projects__icon" icon="plus" />
                </div>
                <p>Add New Project</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="profile">
        <h3>Profile</h3>
        <div class="profile__container">
          <div class="profile__item">
            <label for="blurb">Blurb</label>
            <textarea name="blurb" type="textField" :value="person.blurb" />
          </div>
          <div class="profile__item">
            <label for="profilePic">Profile Pic</label>
            <input type="text" name="profilePic" :value="person.profilePic" />
          </div>
          <div class="profile__item">
            <label for="email">Email</label>
            <input type="email" name="email" :value="person.email" />
          </div>
          <div class="profile__save-btn">
            <Btn text="Save Changes" />
          </div>
        </div>
      </div>
      <div class="profile"></div>
    </div>
  </div>
</template>

<script>
import Btn from "../button/Btn";
export default {
  name: "adminProfile",
  components: {
    Btn
  },
  data() {
    return {
      person: {
        name: "Anton",
        blurb:
          "Then cleaning gain, longer such, was try concept in by her away, better for four one caught least, heard to high his or did look volume to even process mainly left for the she problems from or started dins those made by right, sides most and he away, to rather, left nonsense, writing what reassuring has his stands better geared that hours. As chooses bed second their upper of one apparent may make authentic where with objective and run wanting, the he a he boundless to with tuned hard orthographic principles, on behavioural relays in and away more details as.",
        profilePic: "https://i.ibb.co/r0HhLrw/profile-pic-2.png",
        email: "myemail@mydomain.me"
      },
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
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/_variables";
.account {
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
  &__container {
    width: 100%;
    input {
      width: 100%;
    }
    textarea {
      width: 100%;
    }
  }
  &__item {
    padding: 0.5rem 0;
  }
  &__save-btn {
    margin-top: 1rem;
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
  &__new-link{
    display: flex;
    justify-content: center;
  }
  &__new-item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  &__icon {
    color: black;
    height: 2em;
    width: 2em;
  }
  &__icon-wrap {
    padding: 0.5rem;
    border: 1px solid black;
    border-radius: 100%;
    margin-bottom: 1rem;
    display: flex;
  }
}
a {
  color: black;
}
textarea {
  resize: none;
  padding: 0.5rem;
  min-height: 10rem;
}
input {
  padding: 0.5rem;
}
</style>