<template>
  <section class="bg-white py-12 lg:py-20">
    <div class="max-w-screen-xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center lg:space-x-12">
      <!-- Left Side: Image -->
      <div class="w-full lg:w-1/2 flex justify-center lg:justify-start">
        <AnimatedImage
          src="/images/aboutUs.jpg"
          alt="About Us Image"
          class="rounded-lg shadow-md lg:max-w-lg"
        />
      </div>
      <!-- Right Side: Text Content -->
      <div class="lg:w-1/2 mt-8 lg:mt-0">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">ABOUT US</h2>
        <p class="text-gray-700 text-lg leading-relaxed">
          Welcome to <strong>Three Tree Place</strong>, where our passion is providing high-quality serviced accommodations in <strong>Herts</strong>. Each of our properties is uniquely designed to offer a warm and comfortable living experience.
        </p>
        <p class="text-gray-700 text-lg leading-relaxed mt-4">
          We specialize in boutique-style furnished accommodations for both short and extended stays in <strong>Herts</strong>. Whether you're a business traveler, a professional on assignment, or simply looking for a flexible stay solution, our homes are tailored to meet your needs.
        </p>
        <p class="text-gray-700 text-lg leading-relaxed mt-4">
          At <strong>Three Tree Place</strong>, we take pride in delivering a seamless "Home Away From Home" experience, backed by our outstanding customer service and attention to detail.
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AnimatedImage from './AnimatedImage.vue';

export default defineComponent({
  components: { AnimatedImage },
  name: 'AboutUs',
});
</script>

<style scoped>
/* Add any additional styles if needed */
</style>