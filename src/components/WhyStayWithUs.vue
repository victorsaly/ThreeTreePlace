<template>
  <section class="py-16 bg-gray-100">
    <div class="max-w-screen-xl mx-auto px-6 lg:px-12">
      <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">Why Stay With Us?</h2>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Feature 1: Secured Payments -->
        <div class="flex space-x-4">
          <span class="w-12 h-12 flex-shrink-0 text-gray-800 bg-white rounded-full flex items-center justify-center shadow-md">
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </span>
          <div>
            <h3 class="text-xl font-semibold">Secured Payments</h3>
            <p class="text-gray-700">
              Rest assured with secure, hassle-free transactions for businesses, contractors, and guests in Hertfordshire—your peace of mind is our priority.
            </p>
          </div>
        </div>

        <!-- Feature 2: 24/7 Support -->
        <div class="flex space-x-4">
          <span class="w-12 h-12 flex-shrink-0 text-gray-800 bg-white rounded-full flex items-center justify-center shadow-md">
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          <div>
            <h3 class="text-xl font-semibold">24/7 Support</h3>
            <p class="text-gray-700">
              Our dedicated team is available around the clock to assist with any inquiries or issues, ensuring a seamless experience for your stay in Hertfordshire.
            </p>
          </div>
        </div>

        <!-- Feature 3: Comfortable Stays -->
        <div class="flex space-x-4">
          <span class="w-12 h-12 flex-shrink-0 text-gray-800 bg-white rounded-full flex items-center justify-center shadow-md">
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </span>
          <div>
            <h3 class="text-xl font-semibold">Comfortable Stays</h3>
            <p class="text-gray-700">
              Relax in our fully furnished, well-equipped accommodations in Hertfordshire, offering a home-like experience for business travelers, contractors, and guests.
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