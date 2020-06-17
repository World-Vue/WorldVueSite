<template>
  <div class="section-first" :class="getBgColorClass">
    <div class="section-content">
      <h2 class="text">
        {{ title }}
      </h2>
      <h3 class="subtitle">
        {{ subtitle }}
      </h3>
      <div class="section-text">
        <slot name="text"></slot>
      </div>
      <div v-if="!!linkUrl" class="links">
        <a :href="linkUrl" target="_blank">
          {{ linkTitle }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    linkUrl: {
      type: String,
      required: false,
      default: ''
    },
    linkTitle: {
      type: String,
      required: false,
      default: ''
    },
    bgColor: {
      type: String,
      required: false,
      default: 'standard'
    }
  },
  computed: {
    getBgColorClass() {
      return `color--${this.bgColor}`
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/main';

.section-first {
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 32px 16px 48px 16px;

  &.color--standard {
    background: $color-secondary;
  }
  &.color--dark {
    background: $color-secondary--light;
  }
}
.section-content {
  max-width: 600px;
  margin: auto;
}

.section-text {
  text-align: left;
  margin: auto;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 2em;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 1em;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
