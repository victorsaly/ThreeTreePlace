<template>
  <div>
    <HeroSection />
    <Features />
    <ContactForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  head() {
    return {
      title: 'Home - Three Tree Place',
      meta: [
        { hid: 'description', name: 'description', content: 'Welcome to Three Tree Place, offering premium serviced accommodation in Hertfordshire. Discover our features and get in touch with us today.' },
        { hid: 'keywords', name: 'keywords', content: 'home, Three Tree Place, serviced accommodation, Hertfordshire, features, contact' },
      ]
    };
  }
});
</script>

<style scoped>
/* Add any additional styles if needed */
</style>