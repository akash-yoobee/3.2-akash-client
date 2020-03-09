<template>
  <div class="sidebar">
      <SidebarHome v-if="currentPage === 'home'" />
      <SidebarProfile v-if="currentPage === 'projects'" />

  </div>
</template>

<script>
import SidebarHome from './sidebars/SidebarHome'
import SidebarProfile from './sidebars/SidebarProfile'

export default {
  components:{
    SidebarHome,
    SidebarProfile
  },
  data() {
    return {
      currentPage: "home",
      chris: {
        name: 'Chris',
        image: '',

      }
    };
  }
};
</script>

<style scoped lang="scss">
.sidebar {
  background: linear-gradient(45deg, #060e14, #1e2d3a);
  min-width: 350px;
}
</style>

