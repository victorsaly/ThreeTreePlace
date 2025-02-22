<template>
  <div>
    <TradeAccommodation />
    <WhyStayWithUs />
    <FAQSection />
    <ContactForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TradeAccommodationView',
  head() {
    return {
      title: 'Trade Accommodation - Three Tree Place',
      meta: [
        { hid: 'description', name: 'description', content: 'Discover trade accommodation solutions at Three Tree Place, offering premium serviced accommodation for tradespeople and contractors in Hertfordshire.' },
        { hid: 'keywords', name: 'keywords', content: 'trade accommodation, serviced accommodation, tradespeople, contractors, Hertfordshire' },
      ]
    };
  }
});
</script>

<style scoped>
/* Add any additional styles if needed */
</style>