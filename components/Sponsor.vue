<template>
  <ContentSection
    subtitle="Help Us Help The Community"
    :text="
      `Interested in sponsoring our event and give back to the Vue.js community? We plan to use this sponsorship to help other Vue.js communities grow. This might include help with transcripts for translations, local event sponsorships, and other resources. You will find all the details in the link below.`
    "
  >
    <template v-slot:title>
      <h2>
        Become a
        <span :style="`color: ${$vuetify.theme.currentTheme.primary}`"
          >sponsor</span
        >
        !
      </h2>
    </template>
    <template v-slot:action>
      <VBtn
        rounded
        outlined
        color="primary"
        href="https://www.eventbrite.com/e/vue-global-meetup-tickets-101090117262"
        >Sponsor prospectus</VBtn
      >
    </template>
  </ContentSection>
</template>

<script>
import ContentSection from './ContentSection'

export default {
  name: 'Sponsor',
  components: {
    ContentSection
  }
}
</script>
