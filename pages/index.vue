<template>
  <div class="container">
    <div>
      <nav-bar />
      <hero />
      <content-section
        title="World Vue"
        subtitle="Local Meetup Groups United"
        text="World Vue is an initiative for the Vue.js community focused on community building. We host community-led events for the global Vue.js community as we collaborate with different Vue.js communities from around the world. Our goal is to bring all Vue communities together and create a place where we can all share resources and knowledge. Each event will feature members of local participating communities; every location can provide a speaker as we broadcast around the world bringing new and seasoned speakers to everyone. All Vue.js communities are welcome and encouraged to participate."
        bg-color="standard"
      />
      <content-section
        title="Next Event"
        subtitle="World Vue Summit - 11th Of July"
        text="Come join our second world wide event. Come to the first ever Vue Global Meetup event! We want to bring all Vue communities together and create a place where we can all share resources and knowledge. Every location can provide a speaker as we broadcast around the world bringing new and seasoned speakers to everyone!"
        link-url="https://www.eventbrite.com/e/vue-global-meetup-tickets-101090117262"
        link-title="Register"
        bg-color="light"
      />
      <content-section
        title="Sponsor Us"
        subtitle="Help Us Help The Community"
        text="Interested in sponsoring our event and give back to the Vue.js community? We plan to use this sponsorship to help other Vue.js communities grow. This might include help with transcripts for translations, local event sponsorships, and other resources. You will find all the details in the link below."
        link-url="https://www.eventbrite.com/e/vue-global-meetup-tickets-101090117262"
        link-title="Sponsor prospectus"
        bg-color="standard"
      />
    </div>
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue'
import NavBar from '~/components/NavBar.vue'
import ContentSection from '~/components/ContentSection.vue'

export default {
  components: {
    Hero,
    NavBar,
    ContentSection
  }
}
</script>

<style lang="scss">
@import '../assets/scss/main';

.container {
}
</style>
