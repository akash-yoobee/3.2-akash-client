<template>
  <div id="app">
    <Sidebar />
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar";

export default {
  name: "App",
  components: {
    Sidebar
  }
};
</script>

<style lang="scss">
@import "assets/scss/_variables";
@import url("https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700&display=swap");
@import url("https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700&display=swap");

html {
  box-sizing: border-box;
  font-size: 16px;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Poppins";
  text-transform: uppercase;
}

h1 {
  font-size: 80px;
  font-weight: 600;
}

p,
li {
  font-family: "Raleway";
}

ol,
ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
  border-radius: $global-border-radius;
}
#app {
  display: flex;

  height: 100vh;
}
.content {
  overflow-y: scroll;
  background: $global-background;
}
</style>
