<template>
  <div class="home-background">
    <div
      @click="studentName = anton"
      :selectedStudentName="studentName"
      class="card anton-card"
    >anton</div>
    <div
      @click="studentName = chris"
      :selectedStudentName="studentName"
      class="card chris-card"
    >chris</div>
    <div
      @click="studentName = akash"
      :selectedStudentName="studentName"
      class="card akash-card"
    >akash</div>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return { studentName: null };
  }
};
// In the child component/Vue file Anton needs to expect my prop by including inside his export default {}
//   props: {
//   selectedStudentName: Array
// or
//   selectedStudentName: String
// }
</script>
<style scoped lang="scss">
// font-family: 'Raleway', sans-serif;
@import "../assets/scss/_variables";

.home-background {
  display: flex;
  align-items: center;
  justify-content: space-around;
  // For browsers that do not support gradients
  background-color: #f7f7f9;
  // For browsers that do support gradients
  background-image: linear-gradient(to bottom right, #f7f7f9, #e5e4e5);
  width: auto;
  height: 100vh;
  font-family: "Poppins", sans-serif;
  font-size: 3vw;
  text-align: center;

  .card {
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 10px;
    color: white;
    text-transform: uppercase;
    height: 69vh;
    width: 17vw;
    box-shadow: $global-box-shadow;
  }
  .anton-card {
    background-image: url("../assets/images/anton-background.jpg");
    background-position: right top;
    margin: 0vh 4vw 0vh 8vw;
    box-shadow: $global-box-shadow;
  }
  .chris-card {
    background-image: url("../assets/images/chris-background.jpg");
    margin: 0vh 3vw 0vh 3vw;
  }
  .akash-card {
    background-image: url("../assets/images/akash-background.jpg");
    background-position: right top;
    margin: 0vh 8vw 0vh 4vw;
  }
  // .maybe-useful {
  //   background-image: url("photographer.jpg"); /* The image used */
  //   height: 500px; /* You must set a specified height */
  //   background-position: center; /* Center the image */
  //   background-repeat: no-repeat; /* Do not repeat the image */
  //   background-size: cover; /* Resize the background image to cover the entire container */
  // }
}
</style>