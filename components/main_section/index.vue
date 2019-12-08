<template>
  <section ref="main" class="main">
    <img class="main-logo" src="/images/misc/logitech_logo_white.svg" alt="Logitech Pebble">
    <span class="main-desc">Тонкая. Современная. Тихая.</span>
    <div class="main-header">
      <h1 class="main-header-title">Logitech Pebble M350</h1>
      <span class="main-header-desc">Стильный и продуманный подарок на новый год</span>
    </div>
    <div class="main-slider">
      <div class="main-slider-top">
        <div class="main-slider-top-image">
          <img v-for="color in colors"
               v-show="color === currentColor"
               :key="color"
               :src="`/images/mouse/mouse_up_${color}.png`"
               class="main-slider-top-image-src"
               alt="Logitech Pebble">
          <div :class="['main-slider-top-image-hear main-slider-top-image-hear__left', `main-slider-top-image-hear-${currentColor}`]" />
          <div :class="['main-slider-top-image-hear main-slider-top-image-hear__right', `main-slider-top-image-hear-${currentColor}`]" />
        </div>
        <div class="main-slider-top-bullets">
          <div v-for="color in colors"
               :key="color"
               :class="[`main-slider-top-bullets-btn main-slider-top-bullets-btn__${color}`, {'main-slider-top-bullets-btn__active': currentColor === color}]"
               @click="setColor(color)"/>
        </div>
      </div>
      <div class="main-slider-button-area">
        <a :href="shopUrl" target="_blank" class="main-slider-button-area-btn" @click="analytics">
          КУПИТЬ В ПОДАРОК
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      colors: [
        'white',
        'pink',
        'black'
      ],
      currentColor: 'white'
    }
  },
  computed: {
    shopUrl() {
      if (this.currentColor === 'white') return process.env.MVIDEO_LINK_WHITE
      if (this.currentColor === 'pink') return process.env.MVIDEO_LINK_PINK
      if (this.currentColor === 'black') return process.env.MVIDEO_LINK_BLACK
    }
  },
  methods: {
    setColor(color) {
      this.currentColor = color

      this.$store.dispatch('ga/event', { event1: 'click', event2: 'first_slide', event3: `change_color_to_${color}` })
    },
    analytics() {
      this.$store.dispatch('ga/event', { event1: 'click', event2: 'first_slide', event3: 'btn_click' })
    }
  }
}
</script>

<style lang="sass" scoped>
.main
  width: 100%
  height: 100vh
  min-height: 500px
  background: url(/images/bg/main_section.jpg) no-repeat
  padding: 3vh 0 0 0
  background-position: 80% 40%
  background-size: 380%
  @include tablet
    background-size: cover
    background-position: center center

  &-logo
    display: block
    margin: 0 auto
    height: 5vh
  &-desc
    font: bold 14px/1 $font-main
    color: $color-white
    display: block
    margin: 9vh auto 0
    text-align: center
    @include tablet
      font: bold 14px/1 $font-main
    @include desktop
      font: bold 24px/1 $font-main

  &-header
    margin: 2vh auto 0
    padding: 0 10px
    @include tablet
      padding: 0

    &-title
      margin: 0 0 0 auto
      display: block
      text-align: center
      font: bold 28px/36px $font-brown
      color: $color-white
      text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.35)
      @include tablet
        font: bold 50px/1 $font-brown
      @include desktop
        font: bold 96px/1 $font-brown

    &-desc
      text-align: right
      display: block
      position: relative
      color: $color-white
      font: bold 14px/16px $font-main
      max-width: 175px
      margin: 0 5px 0 0
      left: calc(50% - 27px)
      @include tablet
        font: bold 14px/1 $font-main
        left: calc(50% + 84px)
      @include desktop
        max-width: 300px
        font: bold 24px/1 $font-main
        left: calc(50% + 200px)

  &-slider
    $slider-width: 190px

    position: relative
    top: 6vh
    display: flex
    flex-direction: column
    justify-content: flex-start
    align-items: flex-start
    max-width: $slider-width
    left: calc(50% - #{$slider-width} / 2)
    @media screen and (min-width: 1400px)
      left: calc(50% + 210px)
    @media screen and (min-width: 1600px)
      left: calc(50% + 280px)
    @media screen and (min-width: 1900px)
      left: calc(50% + 310px)
    @media screen and (min-height: 1100px)
      top: 6vh
      transform: scale(1.2) rotate(-15deg)
    @media screen and (max-height: 850px)
      top: 3vh
    @media screen and (max-height: 650px)
      top: 2vh
    @include tablet
      left: calc(50% + 160px)
      transform: rotate(-15deg)
    @include desktop
      left: calc(50% + 210px)

    &-top
      width: 100%
      display: flex
      flex-direction: row
      align-items: center
      justify-content: flex-start

      &-image
        width: 130px
        position: relative
        padding: 13px 0 0 0

        &-hear
          $hear-radius: 50px
          $hear-pointer: 30px

          width: $hear-radius
          height: $hear-radius
          border-radius: 50%
          position: absolute
          top: 0
          &:after
            width: $hear-pointer
            height: $hear-pointer
            position: absolute
            top: calc(50% - #{$hear-pointer} / 2)
            left: calc(50% - #{$hear-pointer} / 2)
            border-radius: 50%
            background: $color-white
            content: ''

          &__left
            left: 0
          &__right
            right: 9px
          &-white
            background: $color-mouse-white
          &-pink
            background: $color-mouse-pink
          &-black
            background: $color-mouse-black

        &-src
          position: relative
          z-index: 1
          width: 100%

      &-bullets
        margin: 0 0 0 30px
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center

        &-btn
          $btn-radius: 30px
          $btn-border-color: #D3D3D3
          $btn-pointer-radius: 20px

          width: $btn-radius
          height: $btn-radius
          border: 1px solid $btn-border-color
          position: relative
          border-radius: 50%
          cursor: pointer
          margin: 10px 0 0 0
          &:after
            width: $btn-pointer-radius
            height: $btn-pointer-radius
            border-radius: 50%
            position: absolute
            content: ''
            top: calc(50% - #{$btn-pointer-radius} / 2)
            left: calc(50% - #{$btn-pointer-radius} / 2)
          &:hover
            background: $btn-border-color

          &__active
            background: $btn-border-color
          &__white
            &:after
              background: $color-white
          &__pink
            &:after
              background: $color-mouse-pink
          &__black
            &:after
              background: $color-mouse-black

    &-button-area
      width: 100%
      padding: 20px 0 0 0

      &-btn
        width: 100%
        padding: 20px 0 17px
        border-radius: 4px
        background: $color-turquoise
        color: $color-title
        text-align: center
        font: bold 18px/18px $font-main
        text-transform: uppercase
        cursor: pointer
        border: none
        outline: none
        display: block
        text-decoration: none
        &:hover
          background: $color-turquoise-hover
        &:focus
          border: none
          outline: none
</style>
