<template>
  <VCard elevation="5">
    <VRow no-gutters style="min-height: 300px">
      <VCol cols="9" class="event-card--left" style="padding-right: 125px">
        <VRow class="text-start pl-5">
          <VCol cols="12">
            <h3>{{ event.title }}</h3>
          </VCol>
          <VCol cols="12">
            <p class="event-card--left--text">{{ event.text }}</p>
          </VCol>
          <VCol cols="12">
            <VBtn color="primary" rounded outlined :href="event.actionLink">{{
              event.actionText
            }}</VBtn>
          </VCol>
        </VRow>
      </VCol>
      <VCol cols="3" class="event-card--right">
        <VRow class="image-container" no-gutters>
          <VImg :src="event.image" />
        </VRow>
      </VCol>
    </VRow>
  </VCard>
</template>

<script>
export default {
  name: 'EventCard',
  props: {
    event: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.event-card--left {
  &--text {
    white-space: pre-line;
    font-size: 0.8em;
    text-align: left;
  }
}
.event-card--right {
  background-color: #4fc08d;
  position: relative;

  .image-container {
    position: absolute;
    padding: 25px;
    left: -100px;
    top: 50px;
    width: 200px;
    height: 200px;
    background-color: #07172e;
  }
}
</style>
