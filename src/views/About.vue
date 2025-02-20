<template>
    <AboutUs /> 
    <MissionVision />
    <ContactForm />

  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import AboutUs from '../components/AboutUs.vue';
  import MissionVision from '../components/MissionVision.vue';
  import ContactForm from '../components/ContactForm.vue';

  export default defineComponent({
    name: 'About',
    components: {
      AboutUs,
      MissionVision,
      ContactForm,
    },
  });
  </script>