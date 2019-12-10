<template>
  <section class="second">
    <hooper ref="hooperSlider"
            :wheel-control="false"
            class="hooperSlider"
            @slide="slideChange">
      <slide v-for="(item, key) in slides"
             :key="key">
        <slide-item
          :text="item.text"
          :desc="item.desc"
          :image="item.url"
          :side="item.side"
          :inverse="true" />
      </slide>
    </hooper>
    <div class="second-bullets">
      <div v-for="(bullet, key) in slides"
           :key="key"
           :class="['second-bullets-btn', {'second-bullets-btn-active': currentIndex === key}]"
           @click="goToSlide(key)" />
    </div>
    <div v-show="isHasPrevSlide" class="second-arrow second-arrow-left" @click="goToPrev"/>
    <div v-show="isHasNextSlide" class="second-arrow second-arrow-right" @click="goToNext"/>
    <div class="second-bullets">
      <div v-for="(bullet, key) in slides"
           :key="key"
           :class="['second-bullets-item', {'second-bullets-item-active': currentIndex === key}]"
           @click="goToSlide(key)" />
    </div>
  </section>
</template>

<script>
import { Hooper, Slide } from 'hooper'
import SlideItem from '@/components/slide/index'
import 'hooper/dist/hooper.css'

export default {
  components: {
    Hooper,
    Slide,
    SlideItem
  },
  data() {
    return {
      currentIndex: 1,
      slides: [
        {
          text: 'Тихий щелчок и бесшумная прокрутка',
          desc: '«Щелчок» мыши на 90% ниже обычного, а резиновое колесико прокрутки скользит в полной тишине',
          url: `/images/slides/slider_slide_1.jpg?v=${Date.now()}`,
          side: true
        },
        {
          text: 'Два способа подключения',
          desc: 'Доступны способы подключения через Bluetooth®️ и входящий в комплект USB-приемник. На расстоянии до 10м',
          url: `/images/slides/slider_slide_2.jpg?v=${Date.now()}`,
          side: false
        },
        {
          text: 'Высокоточное оптическое отслеживание',
          desc: 'Движение мыши Logitech Pebble M350 быстро и точно отслеживается на большинстве поверхностей',
          url: `/images/slides/slider_slide_3.jpg?v=${Date.now()}`,
          side: true
        },
        {
          text: '18 месяцев автономной работы',
          desc: 'Автоматический "спящий режим" для экономии заряда',
          url: `/images/slides/slider_slide_4.jpg?v=${Date.now()}`,
          side: true
        }
      ]
    }
  },
  computed: {
    slidesCount() {
      return this.slides.length
    },
    curSlide() {
      return 0
    },
    isHasPrevSlide() {
      return this.currentIndex !== 0
    },
    isHasNextSlide() {
      return this.currentIndex !== this.slides.length - 1
    },
  },
  methods: {
    slideChange(slide) {
      this.currentIndex = slide.currentSlide
      this.$store.dispatch('ga/event', { event1: 'click', event2: 'slider_slide', event3: `slide_change-to-${slide.currentSlide}` })
    },
    goToPrev() {
      this.$refs.hooperSlider.slidePrev()
      this.$store.dispatch('ga/event', { event1: 'click', event2: 'slider_slide', event3: 'next_slide' })

    },
    goToNext() {
      this.$refs.hooperSlider.slideNext()
      this.$store.dispatch('ga/event', { event1: 'click', event2: 'slider_slide', event3: 'next_slide' })
    },
    goToSlide(index) {
      this.$refs.hooperSlider.slideTo(index)
      this.$store.dispatch('ga/event', { event1: 'click', event2: 'slider_slide', event3: 'bullets_click' })
    },
  }
}
</script>

<style lang="sass" scoped>
  .second
    position: relative
    margin: 0 0 40px 0
    @include desktop
      margin: 0

    /deep/
    .hooper
      &-slide
        @include desktop
          max-height: 800px

    &-bullets
      display: flex
      justify-content: center
      align-items: center
      position: absolute
      width: 100%
      top: 190px
      @include desktop
        top: auto
        bottom: 20px

      &-btn
        --size: 10px
        @include desktop
          --size: 15px

        width: var(--size)
        height: var(--size)
        position: relative
        border-radius: var(--size)
        margin: 0 0 0 10px
        cursor: pointer
        background: #ffffff
        transition: width .15s linear
        &:first-child
          margin: 0
        @include desktop
          margin: 0 0 0 15px

        &-active
          width: calc(var(--size) * 2)
          background: $color-turquoise
          &:after
            background: $color-turquoise

    &-arrow
      --size: 50px
      @include desktop
        --size: 70px

      width: var(--size)
      height: var(--size)
      border-radius: 50%
      background: rgba(#F4F4F4, .6)
      position: absolute
      top: 80px
      z-index: 2
      cursor: pointer
      &:hover
        background: rgba(#F4F4F4, .8)
      &:after
        content: ''
        position: absolute
        width: 9px
        height: 14px
        top: calc(50% - 7px)
        left: calc(50% - 4.5px)
        background: url(/images/misc/arrow-prev.svg) no-repeat
        cursor: pointer
        background-position-y: 50%
        @include desktop
          width: 12px
          height: 20px
          top: calc(50% - 10px)
          left: calc(50% - 6px)
          transform: scale(1.5)
      @include desktop
        top: calc(50% - #{var(--size) / 2})

      &-left
        left: 10px
        @include desktop
          left: 50px

      &-right
        right: 10px
        transform: rotate(180deg)
        @include desktop
          right: 50px
</style>
