<template>
  <div class="sidebar">
    <component :is="sidebar" :user="user"></component>
  </div>
</template>

<script>
import SidebarHome from "./sidebars/SidebarHome";
import SidebarProfile from "./sidebars/SidebarProfile";
import SidebarList from "./sidebars/SidebarList";
import { EventBus } from "../main"

export default {
  components: {
    'home':SidebarHome,
    'profile':SidebarProfile,
    'List':SidebarList,
  },

  created() {
    EventBus.$on('changePage', (data) => {
      this.sidebar = data
    })
    EventBus.$on("currentUser", data => {
      this.user = data;
    })
  },

  data() {
    return {
      currentPage: "home",
      chris: {
        name: "Chris",
        image: ""
      },
      sidebar: "home",
      user: ""
    };
  }
};
</script>

<style scoped lang="scss">
.sidebar {
  background: linear-gradient(45deg, #060e14, #1e2d3a);
  min-width: 400px;
  width: 400px;
  overflow-y: scroll;
}
</style>

