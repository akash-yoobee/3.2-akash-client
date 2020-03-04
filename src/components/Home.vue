<template>
  <div class="home-background">
    <p>Testing</p>
    <div @click="studentName = anton" :selectedStudentName="studentName" class="anton-card">anton</div>
    <div @click="studentName = chris" :selectedStudentName="studentName" class="chris-card">chris</div>
    <div @click="studentName = akash" :selectedStudentName="studentName" class="akash-card">akash</div>
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
@import url("https://fonts.googleapis.com/css?family=Poppins|Raleway&display=swap");
// font-family: 'Raleway', sans-serif;
// font-family: 'Poppins', sans-serif;

.home-background {
  display: flex;
  align-items: center;
  justify-content: space-around;
  // For browsers that do not support gradients
  background-color: #f7f7f9;
  // For browsers that do support gradients
  background-image: linear-gradient(to bottom right, #f7f7f9, #e5e4e5);
  width: 100vw;
  height: 100vh;
  font-family: "Poppins", sans-serif;
  font-size: 3vw;
  text-align: center;
  .anton-card {
    background-image: url("../assets/images/anton-background.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    color: white;
    text-transform: uppercase;
    height: 71vh;
    width: 17vw;
  }
  .chris-card {
    background-image: url("../assets/images/chris-background.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    color: white;
    text-transform: uppercase;
    height: 71vh;
    width: 17vw;
  }
  .akash-card {
    background-image: url("../assets/images/akash-background.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    color: white;
    text-transform: uppercase;
    height: 71vh;
    width: 17vw;
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