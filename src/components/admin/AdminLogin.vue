<template>
  <div class="login">
      <h3>Login</h3>
      <form class="login__form" action="">
          <input type="email" placeholder="Email">
      </form>
  </div>
</template>

<script>
export default {
    name: 'adminLogin'

}
</script>

<style lang="scss" scoped>
.login{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__form{
        display: flex;
        flex-direction: column;
        input{
            margin-bottom: 5px;
        }
    }
}
</style>