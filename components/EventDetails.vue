<template>
  <VDialog :value="value" max-width="1000" @input="$emit('input', $event)">
    <VCard>
      <VCardTitle>Events informations & schedule</VCardTitle>

      <VCardText>
        <VRow class="px-4">
          <VCol cols="6">
            <h4>Featuring speakers from:</h4>
            <v-list-item
              v-for="featuringSpeaker in event.featuringSpeaker"
              :key="featuringSpeaker"
              dense
            >
              <v-list-item-content>
                <v-list-item-title>{{ featuringSpeaker }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </VCol>
          <VCol cols="6">
            <h4>Collaborators:</h4>
            <v-list-item
              v-for="collaborator in event.collaborators"
              :key="collaborator"
              dense
            >
              <v-list-item-content>
                <v-list-item-title>{{ collaborator }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </VCol>
        </VRow>
        <VRow class="px-4">
          <VCol cols="12">
            <h4>Schedule</h4>
          </VCol>
          <VCol v-for="speach in event.schedule" :key="speach.title" cols="4">
            <v-list-item dense>
              <v-list-item-content>
                <v-list-item-title>{{ speach.time }} UTC</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item dense>
              <v-list-item-content>
                <v-list-item-title
                  >Meetup: {{ speach.meetup }}</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item dense>
              <v-list-item-content>
                <v-list-item-title
                  >Speaker: {{ speach.speaker }}</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item dense>
              <v-list-item-content>
                <v-list-item-title>Topic: {{ speach.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <VRow justify="center">
              <VBtn
                small
                color="primary"
                @click="goToPresentation(speach.title)"
              >
                See More
              </VBtn>
            </VRow>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>
  </VDialog>
</template>

<script>
export default {
  name: 'EventDetails',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    event: {
      type: Object,
      required: true
    }
  },
  methods: {
    goToPresentation(title) {
      this.$router.push({ name: 'Presentations', query: { title } })
    }
  }
}
</script>

<style></style>
