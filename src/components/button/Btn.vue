<template>
  <div>
    <a :href="href" class="button">{{text}}</a>
  </div>
</template>

<script>
export default {
  props: ["text"]
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
  cursor: pointer;

  &:hover{
      background-color: #00000014;
  }
}
</style>