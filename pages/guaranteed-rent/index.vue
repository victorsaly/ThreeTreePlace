<template>
  <div>
    <GuaranteedRentInHerts />
    <HowGuaranteedRentWorks />
    <HowWeWork />
    <ContactForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GuaranteedRentInHertsView',
  head() {
    return {
      title: 'Guaranteed Rent in Hertfordshire - Three Tree Place',
      meta: [
        { hid: 'description', name: 'description', content: 'Learn about our guaranteed rent solutions in Hertfordshire. Three Tree Place offers reliable and hassle-free rental income for landlords.' },
        { hid: 'keywords', name: 'keywords', content: 'guaranteed rent, Hertfordshire, landlord solutions, rental income, property management' },
      ]
    };
  }
});
</script>
