<template>
  <div class="navbar navbar__container">
    <div class="navbar__left">
      <img class="navbar__left__logo" src="/logo.png" alt="World Vue Logo" />
      <span class="navbar__left__heading">WORLD VUE</span>
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
    background: $color-primary;
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
      color: $color-primary--text;
      padding-left: 5px;
    }
  }
}
</style>
