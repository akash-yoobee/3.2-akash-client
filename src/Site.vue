<template>
  <div id="site">
    <Sidebar />
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar";

export default {
  name: "Site",
  components: {
    Sidebar
  }
};
</script>

<style lang="scss">
@import "assets/scss/_variables";

#site {
  display: flex;
  height: 100vh;
}
.content {
  overflow-y: scroll;
  background: $global-background;
  width: 100%;
}
</style>
