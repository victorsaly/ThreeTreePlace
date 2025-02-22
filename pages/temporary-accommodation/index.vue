<template>
  <div>
    <TemporaryAccommodation />
    <WhyStayWithUs />
    <FAQSection />
    <ContactForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TemporaryAccommodationView',
  head() {
    return {
      title: 'Temporary Accommodation - Three Tree Place',
      meta: [
        { hid: 'description', name: 'description', content: 'Discover temporary accommodation solutions at Three Tree Place, offering premium serviced accommodation for short-term stays in Hertfordshire.' },
        { hid: 'keywords', name: 'keywords', content: 'temporary accommodation, serviced accommodation, short-term stays, Hertfordshire' },
      ]
    };
  }
});
</script>

<style scoped>
/* Add any additional styles if needed */
</style>