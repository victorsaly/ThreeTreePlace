<template>
  <div>
    <CorporateHousing />
    <WhyStayWithUs />
    <FAQSection />
    <ContactForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'About',
  head() {
    return {
      title: 'Corporate Housing - Three Tree Place',
      meta: [
        { hid: 'description', name: 'description', content: 'Discover corporate housing solutions at Three Tree Place, offering premium serviced accommodation for businesses and contractors in Hertfordshire.' },
        { hid: 'keywords', name: 'keywords', content: 'corporate housing, serviced accommodation, business rentals, contractor housing, Hertfordshire' },
      ]
    };
  },
});
</script>