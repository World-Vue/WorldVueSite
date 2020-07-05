<template>
  <VRow justify="center" class="py-12" :style="{ 'background-color': bgColor }">
    <VCol
      cols="12"
      sm="6"
      justify="center"
      class="text-center"
      :class="`${textColor}--text`"
    >
      <VCol cols="12" class="pa-1">
        <slot name="title">
          <h2>{{ title }}</h2>
        </slot>
      </VCol>
      <VCol cols="12" class="mb-4 pa-1">
        <slot name="subtitle" class="mb-4">
          <h4 class="section-subtitle">{{ subtitle }}</h4>
        </slot>
      </VCol>
      <VCol cols="12">
        <slot name="text">
          <p class="text-multi-line">{{ text }}</p>
        </slot>
      </VCol>
      <VCol cols="12">
        <slot name="action"></slot>
      </VCol>
    </VCol>
  </VRow>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    bgColor: {
      type: String,
      default: 'white'
    },
    textColor: {
      type: String,
      default: 'black'
    }
  }
}
</script>

<style lang="scss" scoped>
.section-subtitle {
  font-size: 0.65em;
  color: grey;
}
</style>
