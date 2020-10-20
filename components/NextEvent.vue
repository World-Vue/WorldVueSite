<template>
  <ContentSection subtitle="Don't miss it !" bg-color="#F5F5F5">
    <template v-slot:title>
      <h2 class="black--text">
        Next
        <span :style="`color: ${$vuetify.theme.currentTheme.primary}`">
          Event
        </span>
        !
      </h2>
    </template>
    <template v-slot:text>
      <EventCard :event="event" />
    </template>
  </ContentSection>
</template>

<script>
import ContentSection from './ContentSection'
import EventCard from './EventCard'
const events = require('@/assets/json/events.json')

export default {
  name: 'NextEvent',
  components: {
    ContentSection,
    EventCard
  },
  computed: {
    event() {
      return events[0]
    }
  }
}
</script>
