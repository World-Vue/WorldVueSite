<template>
  <ContentSection subtitle="Don't miss it !" bg-color="#F5F5F5">
    <template v-slot:title>
      <h2 class="black--text">Next <span>Event</span> !</h2>
    </template>
    <template v-slot:text>
      <EventCard :event="event" />
    </template>
  </ContentSection>
</template>

<script>
import ContentSection from './ContentSection'
import EventCard from './EventCard'

export default {
  name: 'NextEvent',
  components: {
    ContentSection,
    EventCard
  },
  computed: {
    event() {
      return {
        title: 'World Vue Summit - 18th Of July',
        text: `Come join our second world wide event. Come to the first ever Vue Global Meetup event! We want to bring all Vue communities together and create a place where we can all share resources and knowledge.
              
              Every location can provide a speaker as we broadcast around the world bringing new and seasoned speakers to everyone!`,
        actionText: 'Register',
        actionLink: '',
        image: '/world-vue-header-logo.png'
      }
    }
  }
}
</script>
