<template>
  <VApp>
    <NavBar />
    <Hero style="margin-top: 48px" />
    <div class="gradient-container">
      <div class="gradient" />
    </div>
    <VMain class="pa-0">
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

<style lang="scss">
.text-multi-line {
  white-space: pre-line;
  font-size: 0.8em;
}
</style>

<style lang="scss" scoped>
.gradient-container {
  position: relative;

  .gradient {
    position: absolute;
    top: -70px;
    width: 100%;
    height: 100px;
    background: linear-gradient(
      0deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(2, 0, 36, 1) 15%,
      rgba(0, 0, 0, 0) 100%
    );
  }
}
</style>
