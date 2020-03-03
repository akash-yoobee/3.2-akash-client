<template>
  <div class="student-cards">
    <button type="button">Anton</button>
    <button type="button">Chris</button>
    <button type="button">Akash</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.student-cards {
  background-color: linear-gradient(
    90deg,
    rgba(238, 238, 238, 1) 0%,
    rgba(221, 221, 221, 1) 35%,
    rgba(198, 199, 200, 1) 100%
  );
  width: 100%;
  height: 100vh;
  button {
    background-image: url("../assets/images/akash-background.jpg");
    color: white;
  }
}
</style>