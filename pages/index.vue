<template>
  <VRow no-gutters>
    <VCol cols="12">
      <Hero style="width: 100%" />
      <About />
      <NextEvent />
      <Sponsor />
    </VCol>
  </VRow>
</template>

<script>
import Hero from '~/components/Hero.vue'
import About from '~/components/About.vue'
import NextEvent from '~/components/NextEvent.vue'
import Sponsor from '~/components/Sponsor.vue'

export default {
  components: {
    Hero,
    About,
    NextEvent,
    Sponsor
  }
}
</script>
<style lang="scss" scoped>
.v-main,
.container {
  padding-top: 0 !important;
}
</style>
