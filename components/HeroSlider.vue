<template>
  <VCarousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <VRow class="px-15" align="center" justify="center">
        <VCol cols="12">
          <h3>{{ slide.title }}</h3>
        </VCol>
        <VCol cols="12">
          <p
            class="text-multi-line custom-scroll"
            style="max-height: 200px; overflow-y: auto;"
          >
            {{ slide.text }}
          </p>
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
          title: 'World Vue Summit 29th of October',
          text: `Come join our third world wide event. We want to bring all Vue.js
              communities together and create a place where we can all share
              resources and knowledge.

              Every location can provide a speaker as we broadcast around the
              world bringing new and seasoned speakers to everyone!`,
          actionText: 'Register',
          actionLink:
            'https://www.eventbrite.com/e/world-vue-summit-3-tickets-121527651477'
        },
        {
          title: 'Join our community on Discord!',
          text: `Let's stay connected and share our Vue.js passion with each other.
              Here you can ask questions, connect live with fellow attendees, and
              chat with Vue.js enthusiasts on an ongoing basis.

              Come join our VueLand server Discord today, to be part of our growing
              online community!`,
          actionText: 'Join Vue Community Discord',
          actionLink: 'https://vue.land/'
        }
      ]
    }
  }
}
</script>

<style scoped>
.custom-scroll::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
}

.custom-scroll::-webkit-scrollbar {
  width: 5px;
  background-color: #f5f5f5;
}

.custom-scroll::-webkit-scrollbar-thumb {
  background-color: #000000;
  border: 1px solid #555555;
}
</style>
