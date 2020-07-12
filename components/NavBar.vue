<template>
  <VAppBar app dense dark color="black">
    <VRow justify="center" align="center">
      <div class="d-inline-flex pl-2">
        <VImg src="/world-vue-mini-white.png" max-width="20" max-height="20" />
      </div>
      <VCol>
        <nuxt-link to="/" class="ma-0 text-decoration-none white--text">
          World
          <span :style="`color: ${$vuetify.theme.currentTheme.primary}`">
            Vue
          </span>
        </nuxt-link>
      </VCol>
      <VSpacer />
      <nuxt-link class="pr-4" to="/events">Events</nuxt-link>
      <nuxt-link class="pr-4" to="/presentations">Presentations</nuxt-link>
    </VRow>
  </VAppBar>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
