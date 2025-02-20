<template>
  <CorporateHousing />
  <WhyStayWithUs />
  <FAQSection />
  <ContactForm />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CorporateHousing from '../components/CorporateHousing.vue';
import WhyStayWithUs from '../components/WhyStayWithUs.vue';
import FAQSection from '../components/FAQSection.vue';
import ContactForm from '../components/ContactForm.vue';
export default defineComponent({
  name: 'About',
  components: {
    CorporateHousing,
    FAQSection,
    WhyStayWithUs,
    ContactForm,
  },
});
</script>