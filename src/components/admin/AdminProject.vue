<template>
  <div class="project">
    <h3>Create a new project</h3>
    <div class="project__container">
      <div class="project__item">
        <label for="title">Title</label>
        <input name="title" type="text" />
      </div>
      <div class="project__item">
        <label for="body">Body</label>
        <textarea name="body" type="textField" />
      </div>
      <div class="project__item">
        <label for="slogan">Slogan</label>
        <input name="slogan" type="text" />
      </div>
      <div class="project__item">
        <label for="desktop">Desktop Image URL</label>
        <input name="desktop" type="text" />
      </div>
      <div class="project__item">
        <label for="tablet">Tablet Image URL</label>
        <input name="tablet" type="text" />
      </div>
      <div class="project__item">
        <label for="mobile">Mobile Image URL</label>
        <input name="mobile" type="text" />
      </div>
      <div class="project__item">
        <label for="link">Website URL</label>
        <input name="link" type="text" />
      </div>
      <div class="project__item">
        <label for="more">More Information</label>
        <textarea name="more" type="textField" />
      </div>
      <Btn text="Save Project" />
    </div>
  </div>
</template>

<script>
import Btn from "../button/Btn";
export default {
  name: "adminProject",
  components: {
    Btn
  },
  data() {}
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/_variables";

.project {
  padding: 2rem 6rem;
  width: 100vw;

  &__container {
    width: 100%;
    columns: 2;
    column-gap: 5rem;
  }
  input {
    padding: 0.5rem;
    width: 100%;
  }
  textarea {
    width: 100%;
    resize: none;
    min-height: 10rem;
  }
  &__item {
    padding: 0.5rem 0;
  }
}
</style>