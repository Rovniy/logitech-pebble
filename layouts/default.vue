<template>
  <div>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-150594686-2" />
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-150594686-2');
    </script>

    <!-- Global site tag (gtag.js) - Google Ads: 699434004 -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-699434004" />
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-699434004');
    </script>

    <Preloader v-if="isPreloading" />
    <nuxt v-else/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Preloader from '@/components/preloader'

const randomInt = () => {
  return Math.floor(Math.random() * (5 + 1))
}

export default {
  head: {
    link: [
      { rel: 'shortcut icon', id: 'dynamic-favicon', href: `images/favicon/favicon-${randomInt()}.png`}
    ]
  },
  components: {
    Preloader
  },
  computed:{
    ...mapGetters({
      isPreloading: 'preloader/isPreloading'
    })
  },
  mounted() {
    this.$store.dispatch('preloader/init')

    this.$store.dispatch('ga/event', { event1: 'show', event2: 'first_slide' })
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
