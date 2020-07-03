<template>
  <VCarousel cycle hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <VRow class="px-15" align="center" justify="center">
        <VCol cols="12">
          <h3>{{ slide.title }}</h3>
        </VCol>
        <VCol cols="12">
          <p class="text-multi-line">{{ slide.text }}</p>
        </VCol>
        <VCol cols="12">
          <VBtn color="primary" rounded :href="slide.actionLink">{{
            slide.actionText
          }}</VBtn>
        </VCol>
      </VRow>
    </v-carousel-item>
  </VCarousel>
</template>

<script>
export default {
  name: 'HeroSlider',
  computed: {
    slides() {
      return [
        {
          title: 'World Vue Summit 18th of July',
          text: `Come join our second world wide event. Come to the first ever Vue
              Global Meetup event! We want to bring all Vue communities together
              and create a place where we can all share resources and knowledge.

              Every location can provide a speaker as we broadcast around the
              world bringing new and seasoned speakers to everyone!`,
          actionText: 'Register',
          actionLink:
            'https://www.eventbrite.com/e/vue-global-meetup-tickets-101090117262'
        },
        {
          title: 'World Vue Summit 18th of July',
          text: `Come join our second world wide event. Come to the first ever Vue
              Global Meetup event! We want to bring all Vue communities together
              and create a place where we can all share resources and knowledge.

              Every location can provide a speaker as we broadcast around the
              world bringing new and seasoned speakers to everyone!`,
          actionText: 'Register',
          actionLink:
            'https://www.eventbrite.com/e/vue-global-meetup-tickets-101090117262'
        }
      ]
    }
  }
}
</script>
