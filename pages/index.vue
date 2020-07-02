<template>
  <VApp>
    <NavBar />
    <Hero style="margin-top: 48px" />
    <VMain>
      <VContainer fluid class="pa-0">
        <About />
        <NextEvent />
        <Sponsor />
      </VContainer>
    </VMain>
  </VApp>
</template>

<script>
import Hero from '~/components/Hero.vue'
import NavBar from '~/components/NavBar.vue'
import About from '~/components/About.vue'
import NextEvent from '~/components/NextEvent.vue'
import Sponsor from '~/components/Sponsor.vue'

export default {
  components: {
    Hero,
    NavBar,
    About,
    NextEvent,
    Sponsor
  }
}
</script>
<style lang="scss" scoped>
.v-main {
  padding-top: 0 !important;
}
</style>
