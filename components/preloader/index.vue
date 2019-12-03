<template>
  <div class="preloader">
    <div class="preloader-content">
      <div :style="bgStyle" class="preloader-content-bg">
        <img class="preloader-content-image" src="images/misc/mouse_preloader.svg" alt="Preloader" rel="noreferrer">
      </div>
      <span class="preloader-content-amount">{{ preloaderProgress }}%</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      asd: 0
    }
  },
  computed:{
    ...mapGetters({
      preloaderProgress: 'preloader/preloaderProgress'
    }),
    bgStyle() {
      return `background-position: 0px -${this.preloaderProgress}px`
    }
  },
}
</script>

<style lang="sass">
.preloader
  margin: 0
  padding: 0
  width: 100vw
  height: 100vh
  display: flex
  align-items: center
  justify-content: center

  &-content
    height: 100px
    width: 62px
    border-radius: 31px

    &-bg
      height: 100%
      border-radius: 31px
      background: linear-gradient(to top, #01EBD0 0%, #01EBD0 50%, transparent 51%, transparent 100%) no-repeat
      transition: background 0.2s ease
      background-size: 62px 200px

    &-image
      width: 100%
      height: 100%

    &-amount
      font: 600 18px/18px $font-brown
      color: #B5B5B5
      display: block
      margin: 20px 0 0 0
      text-align: center
</style>
