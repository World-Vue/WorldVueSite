<template>
  <VParallax class="parallax" dark src="/hero-image2.jpg" height="500">
    <VRow justify="space-around" align="center">
      <VCol cols="4">
        <VRow>
          <VImg
            src="/world-vue-header-logo.png"
            max-width="150"
            max-height="150"
          />
        </VRow>
        <VRow>
          <h1>
            World
            <span :style="`color: ${$vuetify.theme.currentTheme.primary}`"
              >Vue</span
            >
          </h1>
        </VRow>
        <VRow>
          <p>Community-led events for the global Vue.js community</p>
        </VRow>
        <VRow>
          <VBtn rounded outlined color="white">Discover World Vue</VBtn>
        </VRow>
      </VCol>
      <VCol cols="5" class="hero-slider-container">
        <HeroSlider />
      </VCol>
    </VRow>
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
}
</style>
