<template>
  <VRow class="ma-4" justify="center">
    <VCol cols="12">
      <h1 class="text-center">Events</h1>
    </VCol>
    <VCol cols="12">
      <VRow
        v-for="event in events"
        :key="event.name"
        class="mt-5"
        justify="center"
      >
        <EventCard :event="event" @seeDetails="showDetailsDialog" />
      </VRow>
    </VCol>
    <EventDetails
      v-if="showDetails"
      v-model="showDetails"
      :event="eventSelected"
    />
  </VRow>
</template>

<script>
import EventCard from '@/components/EventCard'
import EventDetails from '@/components/EventDetails'
const events = require('@/assets/json/events.json')

export default {
  name: 'Events',
  components: {
    EventCard,
    EventDetails
  },
  data() {
    return {
      events,
      showDetails: false,
      eventSelected: null
    }
  },
  methods: {
    showDetailsDialog(event) {
      this.eventSelected = event
      this.showDetails = true
    }
  }
}
</script>

<style></style>
