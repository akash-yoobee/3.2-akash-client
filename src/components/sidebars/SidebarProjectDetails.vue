<template>
  <div class="container">
    <div class="profile__project-heading">
      <h2>{{ sidebar.name }}</h2>
      <h3>"{{ sidebar.quote }}"</h3>
    </div>
    <div class="profile__project-image">
      <img :src="sidebar.image" />
    </div>
    <div class="profile__project-body">
      <p>{{ sidebar.body }}</p>
    </div>
    <div class="profile__project-icons">
      <Btn text="Contact" href />
      <i class="fab fa-instagram" :src="sidebar.instagram"></i>
      <i class="fab fa-facebook" :src="sidebar.facebook"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectSidebar",
  data() {
    sidebar: {
      return {
        name: "Chris",
        quote: "I'm the coolest person ever",
        image: "",
        body:
          "Hi my name is Anton and I really like golf and this one time I hit a hole in one! I design websites. Hi my name is Anton and I really like golf and this one time I hit a hole in one! I design websites. Hi my name is Anton and I really like golf and this one time I hit a hole in one! I design websites. Hi my name is Anton",
        instagram: "",
        facebook: ""
      };
    }
  }
};
</script>

<style>
</style>