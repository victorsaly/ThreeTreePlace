<template>
    <section class="pb-16 pt-4 bg-gray-100">
    <div class="max-w-screen-xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center lg:space-x-12">
      <!-- Left Side: Image -->
      <div class="lg:w-1/2 relative">
        <AnimatedImage
        src="/images/TradeAccommodation.png"
        alt="Trade Accommodation"
          class="w-full"
        />
      </div>

      <!-- Right Side: Text Content -->
      <div class="lg:w-1/2 mt-8 lg:mt-0">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Trade Accommodation</h2>
        <p class="text-gray-700 text-lg leading-relaxed">
          Let us find you the ideal accommodation for your team at your next project site!
        </p>
        <p class="text-gray-700 text-lg leading-relaxed mt-4">
          Whether it's a short-term stay of a week or a long-term arrangement for a year, with 2 or 500 people, we guarantee a stress-free and seamless experience in securing accommodation for your team. Let us handle the logistics while you focus on the project at hand.
        </p>
      </div>
    </div>
  </section>

  <section class="py-16 bg-white">
    <div class="max-w-screen-xl mx-auto px-6 lg:px-12">
      <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">Why Work With Us?</h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Feature 1 -->
        <div class="flex space-x-4">
          <span class="w-12 h-12 flex-shrink-0 text-gray-800 bg-white rounded-full flex items-center justify-center shadow-md">
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M8 10v6m4-6v6m4-6v6m-2-12V4a2 2 0 10-4 0v4m-6 4h16m2 0a2 2 0 01-2 2h-1a2 2 0 00-4 0h-2a2 2 0 00-4 0H6a2 2 0 01-2-2H2" />
            </svg>
          </span>
          <div>
            <h3 class="text-xl font-semibold">Bespoke Properties</h3>
            <p class="text-gray-700">
              We ensure all properties meet your exact business needs and budget.
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
            <h3 class="text-xl font-semibold">Nationwide Coverage</h3>
            <p class="text-gray-700">
              We have properties located across the UK and cover all major cities.
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
            <h3 class="text-xl font-semibold">Cut Costs</h3>
            <p class="text-gray-700">
              Save costs from online booking websites, we put you in direct contact with hosts.
            </p>
          </div>
        </div>

        <!-- Feature 4 -->
        <div class="flex space-x-4">
          <span class="w-12 h-12 flex-shrink-0 text-gray-800 bg-white rounded-full flex items-center justify-center shadow-md">
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </span>
          <div>
            <h3 class="text-xl font-semibold">Wide Variety</h3>
            <p class="text-gray-700">
              We have something for teams of all sizes, from Studios up to 6-8 Bedroom Houses.
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
  name: 'TradeAccommodation',
});
</script>