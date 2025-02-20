<template>
  <section class="py-16 bg-gray-100">
    <div class="max-w-screen-xl mx-auto px-6 lg:px-12">
      <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">Why Stay With Us?</h2>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Feature 1 -->
        <div class="flex space-x-4">
          <span class="w-12 h-12 flex-shrink-0 text-gray-800 bg-white rounded-full flex items-center justify-center shadow-md">
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M8 10v6m4-6v6m4-6v6m-2-12V4a2 2 0 10-4 0v4m-6 4h16m2 0a2 2 0 01-2 2h-1a2 2 0 00-4 0h-2a2 2 0 00-4 0H6a2 2 0 01-2-2H2" />
            </svg>
          </span>
          <div>
            <h3 class="text-xl font-semibold">Secured Payments</h3>
            <p class="text-gray-700">
              All transactions are processed securely, ensuring a safe and hassle-free experience.
            </p>
          </div>
        </div>

        <!-- Feature 2 -->
        <div class="flex space-x-4">
          <span class="w-12 h-12 flex-shrink-0 text-gray-800 bg-white rounded-full flex items-center justify-center shadow-md">
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          </span>
          <div>
            <h3 class="text-xl font-semibold">24/7 Support</h3>
            <p class="text-gray-700">
              Our dedicated support team is available around the clock to assist you with any inquiries or issues.
            </p>
          </div>
        </div>

        <!-- Feature 3 -->
        <div class="flex space-x-4">
          <span class="w-12 h-12 flex-shrink-0 text-gray-800 bg-white rounded-full flex items-center justify-center shadow-md">
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </span>
          <div>
            <h3 class="text-xl font-semibold">Comfortable Stays</h3>
            <p class="text-gray-700">
              Enjoy a home-like experience with our fully furnished and well-equipped accommodations.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WhyStayWithUs',
});
</script>

<style scoped>
/* Add any additional styles if needed */
</style>