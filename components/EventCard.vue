<template>
  <VCard elevation="5" max-width="900">
    <VRow no-gutters style="min-height: 300px">
      <VCol
        cols="12"
        md="9"
        :class="{ 'event-card--left': $breakpoint.mdAndUp }"
      >
        <VRow class="px-5">
          <VCol cols="12">
            <h3>{{ event.name }} - {{ dateFormat }}</h3>
          </VCol>
          <VCol cols="12">
            <p class="text-multi-line text-left">
              {{ event.text }}
            </p>
          </VCol>
          <VCol cols="12" md="6">
            <VBtn
              :color="isUpcoming ? 'primary' : 'secondary'"
              rounded
              outlined
              :disabled="
                !isUpcoming && event.actionText.toLowerCase() === 'register'
              "
              :href="event.actionLink"
              >{{ event.actionText }}</VBtn
            >
          </VCol>
          <VCol cols="12" md="6">
            <VBtn color="secondary" rounded outlined @click="seeEventDetails"
              >Informations & Schedule</VBtn
            >
          </VCol>
        </VRow>
      </VCol>
      <VCol v-if="$breakpoint.mdAndUp" md="3" class="event-card--right">
        <VRow
          class="image-container"
          :style="{ 'background-color': $vuetify.theme.currentTheme.secondary }"
          no-gutters
        >
          <VImg :src="event.image" />
        </VRow>
      </VCol>
    </VRow>
  </VCard>
</template>

<script>
import moment from 'moment'

export default {
  name: 'EventCard',
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  computed: {
    dateFormat() {
      return moment(this.event.date, 'MM/DD/YYYY').format('MMMM Do YYYY')
    },
    isUpcoming() {
      return moment().isBefore(moment(this.event.date, 'MM/DD/YYYY'))
    }
  },
  methods: {
    seeEventDetails() {
      this.$router.push({ name: 'Events', query: { details: this.event.name } })
    }
  }
}
</script>

<style lang="scss" scoped>
.event-card--right {
  background-color: #4fc08d;
  position: relative;

  .image-container {
    position: absolute;
    padding: 25px;
    left: -100px;
    top: 50px;
    width: 20vw;
    height: auto;
    max-width: 200px;
    max-height: 200px;
    background-color: #07172e;
  }
}

.event-card--left {
  padding-right: 100px;
}

@media only screen and (max-width: 600px) {
  .event-card--left {
    padding-right: 25px;
  }

  .event-card--right {
    .image-container {
      display: none;
    }
  }
}
</style>
