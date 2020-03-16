<template>
  <div class="home">
    <router-link :to="{name: 'projects', params: { userId: users[0].firstName }}">
      <div class="home__card home__card--anton">
        <p class="home__label">{{ users[0].firstName }}</p>
      </div>
    </router-link>
    <router-link :to="{name: 'projects', params: { userId: users[1].firstName }}">
      <div class="home__card home__card--chris">
        <p class="home__label">{{ users[1].firstName }}</p>
      </div>
    </router-link>
    <router-link :to="{name: 'projects', params: { userId: users[2].firstName }}">
      <div class="home__card home__card--akash">
        <p class="home__label">{{ users[2].firstName }}</p>
      </div>
    </router-link>
  </div>
</template>
<script>
import { EventBus } from "../main";
import axios from "axios";
const apiBaseUrl = "http://localhost:3000/v1";

export default {
  name: "Home",
  data() {
    return {
      users: {}
    };
  },
  methods: {
    getUsers: function() {
      return axios
        .get(`${apiBaseUrl}/users/`)
        .then(function(response) {
          return response.data.users;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    say: function(message) {
      console.log(message);
    }
  },
  created: async function() {
    this.users = await this.getUsers();
    EventBus.$emit("changePage", "home");
  }
};
</script>
<style scoped lang="scss">
@import "../assets/scss/_variables";

.home {
  display: grid;
  height: 100vh;
  width: 79vw;
  align-content: space-evenly;
  grid-template-columns: auto auto auto;
  grid-gap: 0px;
  padding: 0px;
  &__card {
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: $global-border-radius;
    height: 69vh;
    width: 17vw;
    box-shadow: $global-box-shadow;
    transition: ease-in-out 0.3s;
    &:hover {
      transform: scale(1.02);
      transition: ease-in-out 0.3s;
    }
  }
  &__label {
    position: absolute;
    color: white;
    text-transform: uppercase;
    bottom: 6.5vw;
    text-align: center;
    right: 3.5vw;
    font-size: 3vw;
    font-weight: 800;
    font-family: "Poppins", sans-serif;
  }
  .home__card--anton {
    background-image: url("../assets/images/anton-background.jpg");
    background-position: center;
    margin: 0vh 1vw 0vh 9vw;
  }
  .home__card--chris {
    background-image: url("../assets/images/chris-background.jpg");
    margin: 0vh 1vw 0vh 1vw;
  }
  .home__card--akash {
    background-image: url("../assets/images/akash-background.jpg");
    background-position: right top;
    margin: 0vh 9vw 0vh 1vw;
  }
}
</style>