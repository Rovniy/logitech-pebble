<template>
  <section class="present">
    <div class="present-wrapper">
      <div class="present-slider">
        <div class="present-slider-shadow" />
        <hooper ref="hooperPresent"
                :short-drag="false"
                :wheel-control="false"
                @slide="slideChange">
          <slide v-for="slide in curColorSlides" :key="slide">
            <!--suppress HtmlUnknownTarget -->
            <img :src="slide" alt="Logitech Pebble">
          </slide>
        </hooper>
        <div v-show="isHasPrevSlide"
             class="present-slider-arrow present-slider-arrow-prev"
             @click="prevSlide"/>
        <div v-show="isHasNextSlide"
             class="present-slider-arrow present-slider-arrow-next"
             @click="nextSlide"/>
        <div class="present-slider-bullets">
          <div v-for="(bullet, key) in curColorSlides"
               :key="bullet"
               :class="['present-slider-bullets-item', {'present-slider-bullets-item-active': currentIndex === key}]"
               @click="goToSlide(key)" />
        </div>
      </div>
    </div>
    <div class="present-desc-wrapper">
      <div class="present-desc">
        <h4 class="present-desc-title">LOGITECH PEBBLE M350</h4>
        <div class="present-desc-colors">
          <div v-for="color in colors"
               :key="color"
               :class="['present-desc-colors-item', `present-desc-colors-item-${color}`, {'present-desc-colors-item-active': currentColor === color}]"
               @click="chooseColor(color)"/>
          <span class="present-desc-colors-title">({{ rusColorName }})</span>
        </div>
        <div class="present-desc-area">
          <span class="present-desc-area-text">Современная, тонкая и бесшумная (Bluetooth) мышь</span>
        </div>
        <div class="present-desc-buy">
          <button class="present-desc-buy-btn" @click="buyMouse">Купить</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Hooper, Slide } from 'hooper'

export default {
  components: {
    Hooper,
    Slide
  },
  data() {
    return {
      currentIndex: 1,
      currentColor: 'white',
      colors: ['white', 'pink', 'black'],
      slides: {
        white: [
          '/images/present/white_present1.png',
          '/images/present/white_present2.png',
          '/images/present/white_present3.png',
        ],
        pink: [
          '/images/present/pink_present1.png',
          '/images/present/pink_present2.png',
          '/images/present/pink_present3.png',
        ],
        black: [
          '/images/present/black_present1.png',
          '/images/present/black_present2.png',
          '/images/present/black_present3.png',
        ]
      }
    }
  },
  computed: {
    curColorSlides() {
      return this.slides[this.currentColor]
    },
    isHasPrevSlide() {
      return this.currentIndex !== 0
    },
    isHasNextSlide() {
      return this.currentIndex !== this.slides[this.currentColor].length - 1
    },
    rusColorName() {
      if (this.currentColor === 'white') return 'Белый'
      if (this.currentColor === 'pink') return 'Розовый'
      if (this.currentColor === 'black') return 'Графит'
    }
  },
  mounted() {
  },
  methods: {
    chooseColor(color) {
      this.currentColor = color
    },
    slideChange(slide) {
      this.currentIndex = slide.currentSlide
    },
    prevSlide() {
      this.$refs.hooperPresent.slidePrev()
    },
    nextSlide() {
      this.$refs.hooperPresent.slideNext()
    },
    goToSlide(index) {
      this.$refs.hooperPresent.slideTo(index)
    },
    buyMouse() {
      // TODO BUY MOUSE
    }
  }
}
</script>

<style lang="sass" scoped>
.present
  margin: 0
  background: #F4F4F4
  display: flex
  flex-direction: column
  @include desktop
    flex-direction: row
    padding: 100px 0

  &-wrapper
    width: 100%
    display: flex
    @include desktop
      width: 50%
      justify-content: flex-end

  &-slider
    --shadow_height: 250px
    --shadow_width: 200px
    $arrow_height: 35px
    --blur: 17px
    @include desktop
      --shadow_height: 450px
      --shadow_width: 350px
      --blur: 25px

    position: relative
    width: 100%
    max-width: 600px

    &-shadow
      @keyframes rotation
        0%
          transform: rotate(0deg)
        100%
          transform: rotate(360deg)

      position: absolute
      top: 0
      left: 0
      bottom: 0
      right: 0
      &:before, &:after
        position: absolute
        filter: blur(var(--blur))
        content: ''
        display: block
        border-radius: 30%
      &:before
        width: var(--shadow_height)
        height: var(--shadow_width)
        top: calc(50% - #{var(--shadow_width) / 2})
        left: calc(50% - #{var(--shadow_height) / 2})
        background: radial-gradient(#878787, transparent)
        animation: 5s linear rotation infinite
      &:after
        width: var(--shadow_width)
        height: var(--shadow_height)
        top: calc(50% - #{var(--shadow_height) / 2})
        left: calc(50% - #{var(--shadow_width) / 2})
        background: radial-gradient(#878787, transparent)
        animation: 8s linear rotation reverse infinite

    /deep/
    .hooper
      &-slide
        text-align: center
        img
          width: 240px
          @include desktop
            width: 450px

    &-arrow
      width: $arrow_height
      height: $arrow_height
      position: absolute
      top: calc(50% - #{$arrow_height / 2})
      cursor: pointer

      &-prev
        left: 10px
        background: url(/images/misc/arrow-prev.svg) no-repeat center
      &-next
        right: 10px
        background: url(/images/misc/arrow-prev.svg) no-repeat center
        transform: rotate(180deg)

    &-bullets
      $bullet_width: 9px
      @include desktop
      $bullet_width: 10px

      position: relative
      z-index: 1
      display: flex
      justify-content: center
      align-items: center

      &-item
        margin: 0 0 0 5px
        width: $bullet_width
        height: $bullet_width
        background: #9A9A9A
        border-radius: $bullet_width
        transition: width .3s linear
        cursor: pointer
        &:first-child
          margin: 0

        &-active
          width: $bullet_width * 2
          background: #2F3132

  &-desc-wrapper
    display: flex
    width: 100%
    padding: 50px 20px 0
    @include desktop
      width: 50%
      padding: 50px 20px 50px 70px
      justify-content: flex-start
      align-items: center

  &-desc
    @include desktop
      max-width: 450px

    &-title
      font: bold 24px/1 $font-brown
      color: #000000
      text-transform: uppercase
      text-align: left
      @include desktop
        font: bold 30px/1 $font-brown

    &-colors
      display: flex
      flex-direction: row
      align-items: center
      justify-content: flex-start
      margin: 25px 0 0 0

      &-item
        $color_size: 30px

        width: $color_size
        height: $color_size
        position: relative
        margin: 0 0 0 10px
        border: 1px solid #E0E1E2
        border-radius: 50%
        cursor: pointer
        &:first-child
          margin: 0
        &:after
          $dot_size: $color_size - 10px

          border-radius: 50%
          width: $dot_size
          height: $dot_size
          content: ''
          position: absolute
          top: calc(50% - #{$dot_size  / 2})
          left: calc(50% - #{$dot_size / 2})
          background: red
        @include desktop
          margin: 0 0 0 15px

        &-white
          &:after
            background: $color-mouse-white
        &-pink
          &:after
            background: $color-mouse-pink
        &-black
          &:after
            background: $color-mouse-black
        &-active
          background: #E0E1E2

      &-title
        margin: 0 0 0 10px
        font: normal 14px/1 $font-main
        color: #414244
        @include desktop
          font: normal 18px/1 $font-main

    &-area
      margin: 20px 0 0 0
      padding: 0 0 20px 0
      border-bottom: 1px solid #C4C4C4

      &-text
        font: normal 18px/22px $font-main
        color: #6F7678

    &-buy
      padding: 20px 0 40px
      text-align: center
      @include desktop
        text-align: left

      &-btn
        border-radius: 4px
        background: $color-turquoise
        font: bold 18px/1 $font-main
        text-transform: uppercase
        color: #000000
        padding: 14px 40px
        border: none
        outline: none
        &:focus
          outline: none

</style>
