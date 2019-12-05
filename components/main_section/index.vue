<template>
  <section ref="main" class="main">
    <img class="main-logo" src="/images/misc/logitech_logo_white.svg" alt="Logitech Pebble">
    <span class="main-desc">Современная, Тонкая, Тихая Мышь</span>
    <div class="main-header">
      <h1 class="main-header-title">Logitech Pebble M350</h1>
      <span class="main-header-desc">Стильный и продуманный подарок на новый год</span>
    </div>
    <div class="main-slider">
      <div class="main-slider-image">
        <img src="" alt="Logitech Pebble">
      </div>
      <div class="main-slider-bullets">
        <div class="main-slider-bullets-btn main-slider-bullets-btn__white"/>
        <div class="main-slider-bullets-btn main-slider-bullets-btn__pink"/>
        <div class="main-slider-bullets-btn main-slider-bullets-btn__black"/>
      </div>
      <button class="main-slider-button">
        Купить
      </button>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {
    }
  },
  mounted() {
    this.$refs.main.style.setProperty('--bg-image', 'url(/images/bg/main_section.jpg)')
  }
}
</script>

<style lang="sass" scoped>
.main
  --color-white: #{$color-mouse-white}
  --color-pink: #{$color-mouse-pink}
  --color-black: #{$color-mouse-black}
  --mouse-color: var(--color-pink)
  --bg-image: ''

  width: 100%
  height: 100vh
  background: var(--bg-image) no-repeat var(--color-pink)
  background-size: cover
  background-position: center 0
</style>
