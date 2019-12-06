<template>
  <main>
    <!--    <MainComponent />-->
    <SecondComponent />
    <SliderComponent />
    <ReviewComponent />
    <PresentComponent />
    <ParamsComponent />
    <FooterComponent />
  </main>
</template>

<script>
import MainComponent from '@/components/main_section'
import SecondComponent from '@/components/second_section'
import SliderComponent from '@/components/slider_section'
import ReviewComponent from '@/components/review_section'
import PresentComponent from '@/components/present_section'
import ParamsComponent from '@/components/params_section'
import FooterComponent from '@/components/footer'

export default {
  components: {
    MainComponent,
    SecondComponent,
    SliderComponent,
    ReviewComponent,
    PresentComponent,
    ParamsComponent,
    FooterComponent
  }
}
</script>
