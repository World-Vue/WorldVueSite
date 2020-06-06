<template>
  <div class="hero-image hero-image__container">
    <div class="hero-image__image-wrapper">
      <img class="hero-image__image" src="/logo.png" alt="World Vue Logo" />
    </div>
  </div>
</template>

<style lang="scss">
.hero-image {
  &__container {
    height: 320px;
  }

  &__image-wrapper {
    display: block;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: 50%;
    background-image: url(/hero-image.jpg);
    text-align: center;
  }

  &__image {
    margin-top: 50px;
  }
}
</style>
