<template>
  <div class="section-first" :class="getBgColorClass">
    <h1 class="title">
      {{ title }}
    </h1>
    <h2 class="subtitle">
      {{ subtitle }}
    </h2>
    <p>
      {{ text }}
    </p>
    <div v-if="!!linkUrl" class="links">
      <a :href="linkUrl" target="_blank" class="button--grey">
        {{ linkTitle }}
      </a>
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

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
