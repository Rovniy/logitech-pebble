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
        <button class="main-slider-button-area-btn">
          КУПИТЬ В ПОДАРОК
        </button>
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
  methods: {
    setColor(color) {
      this.currentColor = color
    }
  }
}
</script>

<style lang="sass" scoped>
.main
  width: 100%
  height: 100vh
  background: url(/images/bg/main_section.jpg) no-repeat center center
  background-size: cover
  padding: 3vh 0 0 0

  &-logo
    display: block
    margin: 0 auto
    height: 5vh
  &-desc
    font: bold 24px/1 $font-main
    color: $color-white
    display: block
    margin: 9vh auto 0
    text-align: center

  &-header
    margin: 2vh auto 0
    //max-width: 1009px

    &-title
      margin: 0 0 0 auto
      display: block
      text-align: center
      font: bold 96px/1 $font-brown
      color: $color-white
      text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.35)
    &-desc
      max-width: 300px
      text-align: right
      display: block
      margin: 0 5px 0 0
      position: relative
      color: $color-white
      font: bold 24px/1 $font-main
      left: calc(50% + 200px)

  &-slider
    position: relative
    top: 6vh
    left: calc(50% + 210px)
    transform: rotate(-15deg)
    display: flex
    flex-direction: column
    justify-content: flex-start
    align-items: flex-start
    max-width: 190px
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
        transition: .2s ease
        cursor: pointer
        border: none
        outline: none
        &:hover
          background: $color-turquoise-hover
        &:focus
          border: none
          outline: none
</style>
