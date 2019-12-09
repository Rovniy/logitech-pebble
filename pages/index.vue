<template>
  <main>
    <MainComponent />
    <SecondComponent />
    <SliderComponent />
    <ReviewComponent />
    <PresentComponent />
    <ParamsComponent />
    <FooterComponent />
    <noscript>
      <img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=502040143730036&ev=PageView&noscript=1" alt="" />
    </noscript>
    <noscript>
      <img src="https://vk.com/rtrg?p=VK-RTRG-434962-dhBIh" style="position:fixed; left:-999px;" alt=""/>
    </noscript>
    <noscript>
      <img src="https://top-fwz1.mail.ru/counter?id=3152769;js=na" style="border:0;position:absolute;left:-9999px;" alt="Top.Mail.Ru" />
    </noscript>
    <noscript>
      <iframe src="https://www.googletagmanager.com/ns.html?id=AW-699434004" height="0" width="0" style="display:none;visibility:hidden" />
    </noscript>
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
  },
  mounted() {
    window.fbq ? window.fbq('track', 'InitiateCheckout') : null
  }
}
</script>
