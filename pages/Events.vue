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
  watch: {
    '$route.query.details'(eventName) {
      if (!eventName) {
        return
      }
      this.showDetailsDialogByName(eventName)
    },
    showDetails(newValue) {
      if (!newValue) {
        this.$router.push({ query: {} })
      }
    }
  },
  created() {
    if (this.$route.query.details) {
      this.showDetailsDialogByName(this.$route.query.details)
    }
  },
  methods: {
    showDetailsDialogByName(eventName) {
      const event = this.events.find((event) => event.name === eventName)
      if (!event) {
        return
      }
      this.showDetailsDialog(event)
    },
    showDetailsDialog(event) {
      this.eventSelected = event
      this.showDetails = true
    }
  }
}
</script>

<style></style>
