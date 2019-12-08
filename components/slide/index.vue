<template>
  <div ref="slide" :class="['slide', {'inverse': inverse}]" :style="`background: url(${image}) no-repeat center`">
    <div :style="`background: url(${image}) no-repeat center; background-size: cover`" class="slide-left" />
    <div class="slide-right">
      <div class="slide-right-area">
        <h2 class="slide-right-area-text">{{ text }}</h2>
      </div>
      <span class="slide-right-desc">{{ desc }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    inverse: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="sass" scoped>
.slide
  $height-mobile: 220px
  $height-tablet: 300px
  $height-desktop: 600px
  --bg: 0

  width: 100%
  position: relative
  display: flex
  flex-direction: column
  justify-content: center
  align-items: flex-start
  background-size: var(--bg)!important
  @include desktop
    --bg: 'cover'
    padding: 200px 20vw
    background-size: var(--bg)!important
    align-items: flex-start
    height: 800px
    &.inverse
      align-items: flex-end

  &-left
    width: 100%
    height: $height-mobile
    @include desktop
      display: none

  &-right
    width: 100%
    text-align: center
    margin: 0 0 0 -10px
    padding: 20px 20px 0
    display: flex
    flex-direction: column
    @include desktop
      background: rgba(255, 255, 255, .8)
      justify-content: flex-start
      align-items: flex-start
      max-width: 690px
      padding: 70px 40px

    &-area
      text-align: center
      @include desktop
        text-align: left

      &-text
        padding: 9px 10px 5px
        display: inline
        font: bold 28px/32px $font-main
        color: $color-white
        text-align: center
        background: $color-turquoise
        text-transform: uppercase
        box-decoration-break: clone
        .inverse &
          background: #CEFD01
          color: #000000
        @include desktop
          background: none!important
          font: bold 72px/98% $font-main
          color: #000000

    &-desc
      margin: 20px auto 0
      font: normal 18px/96% $font-main
      color: $color-text
      text-align: center
      display: block
      @include desktop
        max-width: 380px
        text-align: left
        margin: 20px auto 0 0
</style>
