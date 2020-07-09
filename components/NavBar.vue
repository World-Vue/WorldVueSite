<template>
  <VAppBar app dense dark color="black">
    <VRow justify="center" align="center">
      <div class="d-inline-flex pl-2">
        <VImg src="/world-vue-mini-white.png" max-width="20" max-height="20" />
      </div>
      <VCol>
        <p class="ma-0">
          World
          <span :style="`color: ${$vuetify.theme.currentTheme.primary}`">
            Vue
          </span>
        </p>
      </VCol>
      <VSpacer />
      <nuxt-link class="pr-4" to="/events">Events</nuxt-link>
    </VRow>
  </VAppBar>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
