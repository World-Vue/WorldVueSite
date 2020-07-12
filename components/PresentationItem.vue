<template>
  <VExpansionPanel>
    <VExpansionPanelHeader>
      <VRow no-gutters>
        <VCol cols="9"> {{ presentation.title }} ({{ year }}) </VCol>
        <VCol cols="3" class="text-right">
          <span>by {{ presentation.author }}</span>
        </VCol>
      </VRow>
    </VExpansionPanelHeader>
    <VExpansionPanelContent>
      <ul>
        <PresentationInfoLine
          text="Slides:"
          :value="presentation.slides"
          :link="presentation.slides"
        />
        <PresentationInfoLine
          text="Vue version:"
          :value="presentation.vueVersion"
        />
        <PresentationInfoLine
          text="Source Language:"
          :value="presentation.sourceLanguage"
        />
        <PresentationInfoLine
          text="City:"
          :value="`${presentation.city}, ${presentation.country}`"
        />
        <PresentationInfoLine
          text="Event:"
          :value="presentation.event.name"
          :link="presentation.event.link"
        />
        <PresentationInfoLine
          text="Git:"
          :value="presentation.gitRepository"
          :link="presentation.gitRepository"
        />
        <PresentationInfoLine
          text="Video:"
          :value="presentation.video"
          :link="presentation.video"
        />
        <PresentationInfoLine
          text="Source Language:"
          :value="presentation.sourceLanguage"
        />
        <li>
          Reach Speaker:
          <ul>
            <PresentationInfoLine
              text="Twitter:"
              :value="presentation.reachSpeaker.twitter"
              :link="presentation.reachSpeaker.twitter"
            />
            <PresentationInfoLine
              text="Github:"
              :value="presentation.reachSpeaker.github"
              :link="presentation.reachSpeaker.github"
            />
            <PresentationInfoLine
              text="Vue Discord:"
              :value="presentation.reachSpeaker.vueDiscord"
            />
            <PresentationInfoLine
              text="Email:"
              :value="presentation.reachSpeaker.email"
            />
          </ul>
        </li>
      </ul>
    </VExpansionPanelContent>
    <!-- <strong v-if="isExpanded">Description:</strong> -->
    <p class="px-6">{{ presentation.description }}</p>
  </VExpansionPanel>
</template>

<script>
import PresentationInfoLine from './PresentationInfoLine'

export default {
  name: 'PresentationItem',
  components: {
    PresentationInfoLine
  },
  props: {
    presentation: {
      type: Object,
      required: true
    },
    year: {
      type: String,
      required: true
    }
  }
}
</script>
