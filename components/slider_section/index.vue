<template>
  <section>
    <hooper>
      <slide>
        slide 1
      </slide>
      <slide>
        slide 2
      </slide>
    </hooper>
  </section>
</template>

<script>
import { Hooper, Slide } from 'hooper'
import 'hooper/dist/hooper.css'

export default {
  components: {
    Hooper,
    Slide
  }
}
</script>

<style lang="sass" scoped>
</style>
