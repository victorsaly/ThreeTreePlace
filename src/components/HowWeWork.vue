<template>
  <section class="py-16 bg-white">
    <div class="max-w-screen-xl mx-auto px-6 lg:px-12">
      <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">How We Work</h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Left Side: Image -->
        <div class="lg:w-full">
          <AnimatedImage
            src="/images/RentProperty2.png"
            alt="Temporary Accommodation"
            class="w-full"
          />
        </div>

        <!-- Right Side: Text Content -->
        <div class="lg:w-full">
          <h3 class="text-2xl font-semibold text-gray-900 mb-4">Our Process</h3>
          <p class="text-gray-700 text-lg leading-relaxed mb-4">
            At <strong>Three Tree Place</strong>, we follow a streamlined process to ensure a seamless experience for our clients. Here’s how we work:
          </p>
          <ul class="list-disc list-inside text-gray-700 text-lg leading-relaxed space-y-2">
            <li>
              <strong>Initial Consultation:</strong> We start with a detailed consultation to understand your specific needs and preferences.
            </li>
            <li>
              <strong>Property Selection:</strong> Based on your requirements, we present a curated list of properties that match your criteria.
            </li>
            <li>
              <strong>Viewing Arrangements:</strong> We arrange viewings at your convenience, ensuring you have ample time to evaluate each property.
            </li>
            <li>
              <strong>Seamless Booking:</strong> Once you’ve made your choice, we handle all the booking details to ensure a smooth transition.
            </li>
            <li>
              <strong>Ongoing Support:</strong> Our team is always available to provide support and address any concerns during your stay.
            </li>
          </ul>

          <!-- CTA Button -->
          <a 
            href="https://calendly.com/threetreeplace-demo/30min"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-6 inline-block bg-black text-white text-lg px-6 py-3 rounded-md font-semibold 
                  hover:bg-gray-900 transition duration-300"
          >
            Book a 30 min call
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HowWeWork',
});
</script>

<style scoped>
/* Add any additional styles if needed */
</style>