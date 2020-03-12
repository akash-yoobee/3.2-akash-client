<template>
  <div>
    <input @keyup.13="onInput" />
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  methods: {
    onInput(event) {
      this.$emit('webPageEntered', event.target.value);
    }
  }
};
</script>

<style scoped>
  input {
    width: 100%;
    font-size: 1.6vw;
    font-weight: 500;
    font-family: "Raleway", sans-serif;
  }
  div {
    margin: 2vh 0 0 0;
  }
</style>