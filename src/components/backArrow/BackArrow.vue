<template>
    <router-link :to="{name: link}">
      <font-awesome-icon class="icon" icon="angle-left" />
    </router-link>
</template>

<script>

export default {
  props: ["link"]
};
</script>

<style lang="scss">
.icon{
      margin-right: 1rem;
    font-size: 35px;
    color: white;
}
</style>