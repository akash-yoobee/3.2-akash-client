<template>
  <div class="home">
    <router-link :to="{name: 'projects'}">
      <div v-on:click="changePage()" class="home__card home__card--anton">
        <p class="home__label">anton</p>
      </div>
    </router-link>
    <div v-on:click="changePage()" class="home__card home__card--chris">
      <p class="home__label">chris</p>
    </div>
    <div v-on:click="changePage()" class="home__card home__card--akash">
      <p class="home__label">akash</p>
    </div>
  </div>
</template>
<script>
import { EventBus } from "../main"
export default {
  name: "Home",
  methods:{
    changePage: function () {
      EventBus.$emit('changePage', 'profile')
      console.log("Clicked");
    }
  },
  data() {
    return {};
  }
};
// In the child component/Vue file Anton needs to expect my prop by including inside his export default {}
//   props: {
//   selectedStudentName: String
// }
</script>
<style scoped lang="scss">
@import "../assets/scss/_variables";

.home {
  display: grid;
  height: 100vh;
  align-content: space-evenly;
  grid-template-columns: auto auto auto;
  grid-gap: 10px;
  padding: 10px;
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
    right: 4vw;
    font-size: 3vw;
    font-family: "Poppins", sans-serif;
  }
  .home__card--anton {
    background-image: url("../assets/images/anton-background.jpg");
    background-position: center;
    margin: 0vh 4vw 0vh 8vw;
  }
  .home__card--chris {
    background-image: url("../assets/images/chris-background.jpg");
    margin: 0vh 3vw 0vh 3vw;
  }
  .home__card--akash {
    background-image: url("../assets/images/akash-background.jpg");
    background-position: right top;
    margin: 0vh 8vw 0vh 4vw;
  }
}
</style>