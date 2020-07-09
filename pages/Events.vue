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
        <EventCard :event="event" />
      </VRow>
    </VCol>
  </VRow>
</template>

<script>
import EventCard from '@/components/EventCard'
const events = require('@/assets/json/events.json')

export default {
  name: 'Events',
  components: {
    EventCard
  },
  data() {
    return {
      events
    }
  },
  created() {
    // const response = await this.$axios.get('/json/events.json')
    console.log(this.events)
  }
}
</script>

<style></style>
