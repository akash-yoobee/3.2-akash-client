<template>
  <div class="container">
    <div class="profile__project-heading">
      <h2>{{ user.name }}</h2>
      <h3>"{{ user.quote }}"</h3>
    </div>
    <div class="profile__project-image">
      <img :src="user.image" />
    </div>
    <div class="profile__project-body">
      <p>{{ user.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectSidebar",
  data() {
    user: {
      return {
        name: "Chris",
        quote: "I'm the coolest person ever",
        image: "",
        body:
          "Hi my name is Anton and I really like golf and this one time I hit a hole in one! I design websites. Hi my name is Anton and I really like golf and this one time I hit a hole in one! I design websites. Hi my name is Anton and I really like golf and this one time I hit a hole in one! I design websites. Hi my name is Anton",
      };
    }
  }
};
</script>

<style>
</style>