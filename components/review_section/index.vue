<template>
  <section class="review">
    <div class="review-wrapper">
      <div class="review-area">
        <span class="review-area-title">www.4pda.ru</span>
        <h3 class="review-area-head">Тише воды, ниже травы: Logitech Pebble M350 и MK470 Slim Combo в работе</h3>
        <a :href="reviewLink" target="_blank" class="review-area-btn">Читать</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      reviewLink: process.env.REVIEW_LINK
    }
  }
}
</script>

<style lang="sass" scoped>
.review
  background: url('/images/bg/review_section.png') no-repeat center
  background-size: 300%
  @include desktop
    padding: 160px 200px
    background-size: cover

  &-wrapper
    display: flex
    flex-direction: row
    padding: 40px 20px
    margin: 0 auto
    max-width: 1200px

  &-area
    padding: 20px 30px
    width: 100%
    background: #F4F4F4
    @include tablet
      max-width: 660px
      margin: 0 auto
    @include desktop
      width: 50%
      margin: 0

    &-title
      font: bold 14px/14px $font-main
      color: #6F7678

    &-head
      font: bold 18px/22px $font-main
      color: #000000
      text-transform: uppercase
      margin: 20px 0 0 0
      @include desktop
        font: bold 30px/36px $font-main

    &-btn
      margin: 20px 0 0 0
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
      &:focus
        outline: none
      @include desktop
        margin: 40px 0 0 0

</style>
