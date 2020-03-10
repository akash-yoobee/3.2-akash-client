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
  }
  div {
    /* text-align: center; */
    margin: 20px;
  }
</style>