<template>
  <section class="present">
    <div class="present-wrapper">
      <div class="present-slider">
        <div :class="['present-slider-shadow', `present-slider-shadow-${currentColor}`]" />
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
          <a :href="shopUrl" target="_blank" class="present-desc-buy-btn" @click="buyMouse">Купить</a>
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
          '/images/present/white_01_400.png',
          '/images/present/white_02_400.png',
          '/images/present/white_03_400.png',
          '/images/present/white_04_400.png',
          '/images/present/white_05_400.png',
        ],
        pink: [
          '/images/present/pink_01_400.png',
          '/images/present/pink_02_400.png',
          '/images/present/pink_03_400.png',
          '/images/present/pink_04_400.png',
          '/images/present/pink_05_400.png',
        ],
        black: [
          '/images/present/black_01_400.png',
          '/images/present/black_02_400.png',
          '/images/present/black_03_400.png',
          '/images/present/black_04_400.png',
          '/images/present/black_05_400.png',
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
    },
    shopUrl() {
      if (this.currentColor === 'white') return process.env.MVIDEO_LINK_WHITE
      if (this.currentColor === 'pink') return process.env.MVIDEO_LINK_PINK
      if (this.currentColor === 'black') return process.env.MVIDEO_LINK_BLACK
    }
  },
  mounted() {
  },
  methods: {
    chooseColor(color) {
      this.currentColor = color
      this.$refs.hooperPresent.slideTo(0)
      this.$store.dispatch('ga/event', { event1: 'click', event2: 'present', event3: `change_color_to_${color}` })
    },
    slideChange(slide) {
      this.currentIndex = slide.currentSlide
      this.$store.dispatch('ga/event', { event1: 'click', event2: 'present', event3: `slide_change-to-${slide.currentSlide}` })
    },
    prevSlide() {
      this.$refs.hooperPresent.slidePrev()
      this.$store.dispatch('ga/event', { event1: 'click', event2: 'present', event3: 'prev_slide' })
    },
    nextSlide() {
      this.$refs.hooperPresent.slideNext()
      this.$store.dispatch('ga/event', { event1: 'click', event2: 'present', event3: 'next_slide' })
    },
    goToSlide(index) {
      this.$refs.hooperPresent.slideTo(index)
      this.$store.dispatch('ga/event', { event1: 'click', event2: 'present', event3: 'bullets_click' })
    },
    buyMouse() {
      this.$store.dispatch('ga/event', { event1: 'click', event2: 'present', event3: 'buy_btn' })
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
    @include tablet
      max-width: 600px
      margin: 0 auto
    @include desktop
      max-width: none
      margin: 0
      width: 50%
      justify-content: flex-end

  &-slider
    --shadow_height: 250px
    --shadow_width: 200px
    $arrow_height: 35px
    --blur: 15px
    @include tablet
      margin: 0 auto
    @include desktop
      --shadow_height: 450px
      --shadow_width: 350px
      --blur: 20px
      margin: 0

    position: relative
    width: 100%
    max-width: 600px
    padding: 20px 0 0 0
    @include desktop
      padding: 0

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
        animation: 5s linear rotation infinite
      &:after
        width: var(--shadow_width)
        height: var(--shadow_height)
        top: calc(50% - #{var(--shadow_height) / 2})
        left: calc(50% - #{var(--shadow_width) / 2})
        animation: 8s linear rotation reverse infinite

      &-white
        &:before
          background: radial-gradient(#d9d4d0, transparent)
        &:after
          background: radial-gradient(#d8eae7, transparent)
      &-pink
        &:before
          background: radial-gradient(#ffe1e1, transparent)
        &:after
          background: radial-gradient(#f3e6ff, transparent)
      &-black
        &:before
          background: radial-gradient(#d7cfd0, transparent)
        &:after
          background: radial-gradient(#beb9bc, transparent)

    /deep/
    .hooper
      &-slide
        text-align: center
        img
          width: 240px
          height: 240px
          @include desktop
            width: 450px
            height: 450px

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
      margin: 40px 0 0 0
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
        transition: width .15s linear
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
    @include tablet
      max-width: 600px
      margin: 0 auto
      justify-content: center
    @include desktop
      justify-content: flex-start
      max-width: none
      margin: 0
      width: 50%
      padding: 50px 20px 50px 70px
      align-items: center

  &-desc
    @include desktop
      max-width: 450px

    &-title
      font: bold 24px/1 $font-brown
      color: #000000
      text-transform: uppercase
      text-align: left
      @include tablet
        text-align: center
      @include desktop
        text-align: left
        font: bold 30px/1 $font-brown

    &-colors
      display: flex
      flex-direction: row
      align-items: center
      justify-content: flex-start
      margin: 25px 0 0 0
      @include tablet
        justify-content: center
      @include desktop
        justify-content: flex-start


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
      @include tablet
        text-align: center
      @include desktop
        text-align: left

      &-text
        font: normal 18px/22px $font-main
        color: #6F7678

    &-buy
      padding: 20px 0 40px
      text-align: center
      @include desktop
        text-align: left

      &-btn
        display: inline-block
        text-decoration: none
        border-radius: 4px
        background: $color-turquoise
        font: bold 18px/1 $font-main
        text-transform: uppercase
        color: #000000
        padding: 14px 40px
        border: none
        outline: none
        &:hover
          background: #0BC2AD
        &:focus
          outline: none

</style>
