<template>
    <div>
      <HeroSection />
      <Features />
      <ContactForm />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import HeroSection from '../components/HeroSection.vue';
  import Features from '../components/Features.vue';
  import ContactForm from '../components/ContactForm.vue';
  
  export default defineComponent({
    name: 'Home',
    components: {
      HeroSection,
      Features,
      ContactForm,
    },
  });
  </script>