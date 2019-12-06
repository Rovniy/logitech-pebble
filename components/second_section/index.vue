<template>
  <section>
    <hooper class="hooperSlider">
      <slide v-for="item in slides" :key="item.url">
        <slide-item
          :text="item.text"
          :desc="item.desc"
          :image="item.url"
          :cur-index="curSlide"
          :prev-slide="goPrev"
          :next-slide="goNext"
          :max-index="slidesCount"/>
      </slide>
    </hooper>
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
      slides: [
        {
          text: 'Современная, изящная и красивая',
          desc: 'Элегантный дизайн этой портативной мыши будет прекрасно смотреться на вашем столе.',
          url: '/images/slides/slide1.jpg'
        },
        {
          text: 'Второй слайд',
          desc: 'Описание 2',
          url: '/images/slides/slide1.jpg'
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
    }
  },
  methods: {
    goPrev() {

    },
    goNext() {

    }
  }
}
</script>

<style lang="sass" scoped>

</style>
