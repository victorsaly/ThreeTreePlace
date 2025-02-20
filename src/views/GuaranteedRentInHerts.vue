<template>
    <GuaranteedRentInHerts />
    <HowGuaranteedRentWorks />
    <HowWeWork />
    <ContactForm />
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import GuaranteedRentInHerts from '../components/GuaranteedRentInHerts.vue';
  import HowGuaranteedRentWorks from '../components/HowGuaranteedRentWorks.vue';
  import ContactForm from '../components/ContactForm.vue';
  import HowWeWork from '../components/HowWeWork.vue';
  export default defineComponent({
    name: 'GuaranteedRentInHertsView',
    components: {
      GuaranteedRentInHerts,
      ContactForm,
      HowGuaranteedRentWorks,
        HowWeWork,
    },
  });
  </script>
