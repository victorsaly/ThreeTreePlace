<template>
  <TemporaryAccommodation />
  <WhyStayWithUs />
  <FAQSection />
  <ContactForm />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TemporaryAccommodation from '../components/TemporaryAccommodation.vue';
import WhyStayWithUs from '../components/WhyStayWithUs.vue';
import FAQSection from '../components/FAQSection.vue';
import ContactForm from '../components/ContactForm.vue';

export default defineComponent({
  name: 'TemporaryAccommodationView',
  components: {
    TemporaryAccommodation,
    WhyStayWithUs,
    FAQSection,
    ContactForm,
  },
});
</script>

<style scoped>
/* Add any additional styles if needed */
</style>