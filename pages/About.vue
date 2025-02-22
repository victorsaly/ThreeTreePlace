<template>
  <div>
    <AboutUs />
    <MissionVision />
    <ContactForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'About',
  head() {
    return {
      title: 'About Us - Three Tree Place',
      meta: [
        { hid: 'description', name: 'description', content: 'Learn more about Three Tree Place, our mission, vision, and the team behind our premium serviced accommodation in Hertfordshire.' },
        { hid: 'keywords', name: 'keywords', content: 'about us, Three Tree Place, mission, vision, team, Hertfordshire' },
      ]
    };
  }
});
</script>

<style scoped>
/* Add any additional styles if needed */
</style>