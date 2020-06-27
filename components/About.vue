<template>
  <ContentSection
    subtitle="Local Meetup Groups United"
    :text="text"
    :bg-color="$vuetify.theme.currentTheme.secondary"
    text-color="white"
  >
    <template v-slot:title>
      <h2>
        What is World
        <span :style="`color: ${$vuetify.theme.currentTheme.primary}`"
          >Vue</span
        >
        ?
      </h2>
    </template>
  </ContentSection>
</template>

<script>
import ContentSection from './ContentSection'

export default {
  name: 'About',
  components: {
    ContentSection
  },
  data() {
    return {
      text: `World Vue is an initiative for the Vue.js community focused on community building. We host community-led events for the global Vue.js community as we collaborate with different Vue.js communities from around the world.

              Our goal is to bring all Vue communities together and create a place where we can all share resources and knowledge. Each event will feature members of local participating communities; every location can provide a speaker as we broadcast around the world bringing new and seasoned speakers to everyone.

              All Vue.js communities are welcome and encouraged to participate.
            `
    }
  }
}
</script>
