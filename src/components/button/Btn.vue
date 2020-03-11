<template>
    <router-link :to="{name: link}" class="button" :class="[('button' + '--' + modifier)]">{{text}}</router-link>
</template>

<script>

export default {
  props: ["text", "modifier", "link"]
};
</script>

<style lang="scss">

.button {
  padding: 0.4rem 1.5rem;
  border: 2px black solid;
  border-radius: 5px;
  text-transform: uppercase;
  font-family: "Poppins";
  font-weight: 600;
  letter-spacing: 1px;
  color: black;
  text-decoration: none;
  cursor: pointer;

  &:hover{
      background-color: #00000014;
  }
  &--light{
    border: 2px white solid;
    color: white;
    &:hover{
      background-color: #ffffff0f;
    }
  }
  &--inverse{
    background-color: black;
    color: white;
    &:hover{
      background-color: #000000b0;
    }
  }
}
</style>