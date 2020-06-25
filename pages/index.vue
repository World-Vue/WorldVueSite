<template>
  <VApp>
    <NavBar />
    <Hero style="margin-top: 48px" />
    <VMain>
      <VContainer fluid> </VContainer>
    </VMain>
  </VApp>
</template>

<script>
import Hero from '~/components/Hero.vue'
import NavBar from '~/components/NavBar.vue'

export default {
  components: {
    Hero,
    NavBar
  }
}
</script>
