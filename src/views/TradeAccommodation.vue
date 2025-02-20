<template>
  <TradeAccommodation />
  <WhyStayWithUs />
  <FAQSection />
  <ContactForm />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TradeAccommodation from '../components/TradeAccommodation.vue';
import WhyStayWithUs from '../components/WhyStayWithUs.vue';
import FAQSection from '../components/FAQSection.vue';
import ContactForm from '../components/ContactForm.vue';

export default defineComponent({
  name: 'TradeAccommodationView',
  components: {
    TradeAccommodation,
    WhyStayWithUs,
    FAQSection,
    ContactForm,
  },
});
</script>

<style scoped>
/* Add any additional styles if needed */
</style>