<template>
  <section class="py-12 bg-gray-100">
    <div class="max-w-screen-xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center lg:space-x-12">
      <!-- Left Side: Image -->
      <div class="lg:w-1/3 relative">
        <AnimatedImage
        :src="'images/CorporateHousing.png'"
        alt="Corporate Housing"
          class="w-full rounded-lg shadow-md"
        />
      </div>

      <!-- Right Side: Text Content -->
      <div class="lg:w-2/3 mt-8 lg:mt-0">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Corporate Housing</h2>
        <p class="text-gray-700 text-lg leading-relaxed">
          At <strong>Three Tree Place</strong>, we specialize in offering premium corporate accommodations in Herts, tailored for professionals seeking both short-term and extended stays.
        </p>
        <p class="text-gray-700 text-lg leading-relaxed mt-4">
          Our fully-furnished properties are meticulously designed to provide comfort, flexibility, and privacy—perfect for business travelers who desire the convenience of a hotel combined with the warmth of a home-like experience.
        </p>
        <p class="text-gray-700 text-lg leading-relaxed mt-4">
          We are dedicated to delivering exceptional service, modern amenities, and seamless experiences, ensuring your stay in Herts is both comfortable and productive.
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CorporateHousing',
});
</script>

<style scoped>
/* Add any additional styles if needed */
</style>