<template>
  <div class="slide">
    <div :style="`background: url(${image}) no-repeat center; background-size: cover`" class="slide-left" />
    <div class="slide-right">
      <div class="slide-right-btn">
        <div :class="['slide-right-btn-item slide-right-btn-item-prev', {'slide-right-btn-item-active': isPrevActive}]" @click="goToPrevSlide"/>
        <div :class="['slide-right-btn-item slide-right-btn-item-next', {'slide-right-btn-item-active': isNextActive}]" @click="goToNextSlide"/>
      </div>
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
    nextSlide: {
      type: Function,
      default: () => {}
    },
    prevSlide: {
      type: Function,
      default: () => {}
    },
    curIndex: {
      type: Number,
      default: 0
    },
    maxIndex: {
      type: Number,
      default: 0
    }
  },
  computed: {
    isPrevActive() {
      return this.curIndex !== 0
    },
    isNextActive() {
      return this.curIndex !== this.maxIndex
    }
  },
  methods: {
    goToPrevSlide() {
      if (this.isPrevActive) {
        this.nextSlide()
      }
    },
    goToNextSlide() {
      if (this.isNextActive) {
        this.nextSlide()
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.slide
  $height-mobile: 220px
  $height-tablet: 300px
  $height-desktop: 600px

  width: 100%
  padding: 10px
  position: relative
  display: flex
  flex-direction: column
  justify-content: center
  align-items: flex-start

  &-left
    width: 100%
    height: $height-mobile

  &-right
    width: 100%
    text-align: center
    padding: 20px 10px 0
    display: flex
    flex-direction: column

    &-btn
      display: none
      flex-direction: row
      justify-content: center
      align-items: center
      order: 1
      margin: 40px 0 0 0
      @include tablet
        display: flex

      &-item
        $size: 50px

        width: $size
        height: $size
        background-color: #F4F4F4
        position: relative
        &:after
          display: block
          height: 14px
          width: 9px
          content: ''
          color: #6F7678
          position: absolute
          top: 17px
          left: 20px

        &-prev
          margin: 0 10px 0 0
          &:after
            background: url(/images/misc/arrow-prev.svg) no-repeat

        &-next
          margin: 0 0 0 10px
          &:after
            background: url(/images/misc/arrow-prev.svg) no-repeat
            transform: rotate(180deg)

        &-active
          background-color: $color-turquoise

    &-area
      text-align: center
      &-text
        padding: 9px 10px 5px
        display: inline
        font: bold 28px/32px $font-main
        color: $color-white
        text-align: center
        background: $color-turquoise
        text-transform: uppercase
        box-decoration-break: clone

    &-desc
      margin: 20px auto 0
      font: normal 18px/96% $font-main
      color: $color-text
      text-align: center
      display: block

  .a
    color: red
</style>
