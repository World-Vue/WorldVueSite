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
          <h1>World <span>Vue</span></h1>
        </VRow>
        <VRow>
          <p>Community-led events for the global Vue.js community</p>
        </VRow>
        <VRow>
          <VBtn rounded outlined color="white">Discover World Vue</VBtn>
        </VRow>
      </VCol>
      <VCol cols="4"> </VCol>
    </VRow>
  </VParallax>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style lang="scss">
// .parallax img {
//   height: 100vh;
// }
</style>
