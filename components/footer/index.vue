<template>
  <section class="footer">
    <div class="footer-left">
      <span class="footer-left-copy">&copy; {{ currentYear }} Logitech. Все права защищены</span>
    </div>
    <div class="footer-right">
      <a :href="vk" class="footer-right-item-link" rel="noopener" target="_blank" @click="goToVk">
        <img class="footer-right-item-link-img" src="images/misc/vk.svg" loading="lazy" alt="Logitech Vkontakte">
      </a>
      <a :href="facebook" class="footer-right-item-link" rel="noopener" target="_blank" @click="goToFb">
        <img class="footer-right-item-link-img" src="images/misc/facebook.svg" loading="lazy" alt="Logitech Facebook">
      </a>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      vk: process.env.SOCIAL_LINK_VK,
      facebook: process.env.SOCIAL_LINK_FACEBOOK,
      currentYear: new Date().getFullYear()
    }
  },
  methods: {
    goToVk() {
      this.$store.dispatch('ga/event', { event1: 'click', event2: 'external_link', event3: 'vkontakte' })
    },
    goToFb() {
      this.$store.dispatch('ga/event', { event1: 'click', event2: 'external_link', event3: 'facebook' })
    }
  }
}
</script>

<style lang="sass" scoped>
.footer
  background: #F4F4F4
  display: flex
  flex-direction: column
  align-items: center
  padding: 20px 0
  @include tablet
    flex-direction: row
    padding: 33px 40px
  @include desktop
    padding: 33px 240px

  &-left
    width: 100%
    text-align: center
    @include tablet
      width: 50%
      text-align: left

    &-copy
      font: 14px/14px $font-main
      color: #000

  &-right
    width: 100%
    display: flex
    align-items: center
    padding: 20px 0 0 0
    justify-content: center
    @include tablet
      justify-content: flex-end
      width: 50%
      padding: 0

    &-item
      height: 24px
      display: inline-flex
      list-style: none
      align-items: center
      justify-content: center

      &-link
        &:nth-child(2)
          margin: 0 0 0 35px
</style>
