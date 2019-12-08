<template>
  <section class="second">
    <hooper ref="hooperSecond"
            :wheel-control="false"
            class="hooperSlider"
            @slide="slideChange">
      <slide v-for="(item, key) in slides"
             :key="key">
        <slide-item
          :text="item.text"
          :desc="item.desc"
          :image="item.url"
          :inverse="false" />
      </slide>
    </hooper>
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
          text: 'Современная, изящная и красивая',
          desc: 'Элегантный дизайн этой портативной мыши будет прекрасно смотреться на вашем столе.',
          url: '/images/slides/second_slide_1.png'
        },
        {
          text: 'ОРГАНИЧНАЯ ФОРМА ДЛЯ ВАС',
          desc: 'Округлый и естественный дизайн Logitech Pebble M350 комфортно ложиться в ладонь.',
          url: '/images/slides/second_slide_1.png'
        },
        {
          text: 'ЧРЕЗВЫЧАЙНО КОМПАКТНАЯ',
          desc: 'Небольшой размер позволяет с лёгкостью уместить её в сумку для ноутбука и пользоваться ею в пути.',
          url: '/images/slides/second_slide_1.png'
        },
        {
          text: 'ВАШ ПРАВИЛЬНЫЙ ЦВЕТ',
          desc: 'Выберите мышь кремового, розового или графитового цвета, в зависимости от облика вашего стола.',
          url: '/images/slides/second_slide_1.png'
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
    },
    goToPrev() {
      this.$refs.hooperSecond.slidePrev()
    },
    goToNext() {
      this.$refs.hooperSecond.slideNext()
    },
    goToSlide(index) {
      this.$refs.hooperSecond.slideTo(index)
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
