<template>
  <VParallax class="parallax" dark src="/hero-image2.jpg" height="550">
    <VRow justify="space-around" align="center">
      <VCol sm="4">
        <VRow class="justify-center">
          <VImg
            src="/world-vue-header-logo.png"
            max-width="150"
            max-height="150"
          />
        </VRow>
        <VRow class="justify-center">
          <h1>
            World
            <span :style="`color: ${$vuetify.theme.currentTheme.primary}`"
              >Vue</span
            >
          </h1>
        </VRow>
        <VRow class="justify-center">
          <p>Community-led events for the global Vue.js community</p>
        </VRow>
        <VRow class="justify-center">
          <VBtn rounded outlined color="white">Discover World Vue</VBtn>
        </VRow>
      </VCol>
      <VCol sm="5" class="hero-slider-container">
        <HeroSlider />
      </VCol>
    </VRow>
    <div class="gradient-container">
      <div class="gradient" />
    </div>
  </VParallax>
</template>

<script>
import HeroSlider from './HeroSlider'

export default {
  name: 'Hero',
  components: {
    HeroSlider
  }
}
</script>

<style lang="scss">
.hero-slider-container {
  background-color: rgba(255, 255, 255, 0.2);
}
.parallax {
  opacity: 0.9;
  position: relative;
}

.gradient-container {
  position: relative;
  margin-left: -100px;
  margin-right: -100px;

  .gradient {
    position: absolute;
    bottom: -10px;
    width: 100%;
    height: 100px;
    background: linear-gradient(
      0deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(2, 0, 36, 1) 15%,
      rgba(0, 0, 0, 0) 100%
    );
    z-index: 100;
  }
}
@media only screen and (max-width: 600px) {
  .parallax {
    height: auto !important;
    opacity: 0.9;
    background: #000000;

    .v-parallax__image {
      left: 0;
      opacity: 0.3 !important;
      transform: none !important;
    }
  }
}
</style>
