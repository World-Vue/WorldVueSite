<template>
  <div class="navbar navbar__container">
    <div class="navbar__left">
      <img class="navbar__left__logo" src="/logo.png" alt="World Vue Logo" />
      <h1 class="navbar__left__heading">WORLD VUE</h1>
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/scss/main';

.navbar {
  &__container {
    display: flex;
    height: 50px;
    position: relative;
    box-sizing: border-box;
    background: $color-secondary;
  }

  &__left {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-left: 16px;

    &__logo {
      height: 25px;
    }

    &__heading {
      font-weight: bold;
      padding-left: 5px;
    }
  }
}

.navbar__left {
  margin-left: 2em;
}
</style>
