<template>
    <section class="py-12 bg-gray-100">
    <div class="max-w-screen-xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center lg:space-x-12">
      <!-- Left Side: Image -->
      <div class="lg:w-1/3 relative">
        <AnimatedImage
        src="/images/TradeAccommodation.png"
        alt="Trade Accommodation"
          class="w-full rounded-lg shadow-md"
        />
      </div>

      <!-- Right Side: Text Content -->
      <div class="lg:w-2/3 mt-8 lg:mt-0">
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
      <!-- Feature 1: Bespoke Properties -->
      <div class="flex space-x-4">
        <span class="w-12 h-12 flex-shrink-0 text-gray-800 bg-white rounded-full flex items-center justify-center shadow-md">
          <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </span>
        <div>
          <h3 class="text-xl font-semibold">Bespoke Properties</h3>
          <p class="text-gray-700">
            We ensure all properties meet your exact business needs and budget, tailored for companies, contractors, and landlords in Hertfordshire and beyond.
          </p>
        </div>
      </div>

      <!-- Feature 2: Nationwide Coverage -->
      <div class="flex space-x-4">
        <span class="w-12 h-12 flex-shrink-0 text-gray-800 bg-white rounded-full flex items-center justify-center shadow-md">
          <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        </span>
        <div>
          <h3 class="text-xl font-semibold">Nationwide Coverage</h3>
          <p class="text-gray-700">
            We have properties located across the UK, covering all major cities—including Hertfordshire—ensuring flexibility for your team’s needs.
          </p>
        </div>
      </div>

      <!-- Feature 3: Cut Costs -->
      <div class="flex space-x-4">
        <span class="w-12 h-12 flex-shrink-0 text-gray-800 bg-white rounded-full flex items-center justify-center shadow-md">
          <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-9c-1.11 0-2.08.402-2.599 1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
        <div>
          <h3 class="text-xl font-semibold">Cut Costs</h3>
          <p class="text-gray-700">
            Save on accommodation costs by avoiding online booking fees—we connect you directly with hosts for cost-effective solutions in the UK.
          </p>
        </div>
      </div>

      <!-- Feature 4: Wide Variety -->
      <div class="flex space-x-4">
        <span class="w-12 h-12 flex-shrink-0 text-gray-800 bg-white rounded-full flex items-center justify-center shadow-md">
          <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </span>
        <div>
          <h3 class="text-xl font-semibold">Wide Variety</h3>
          <p class="text-gray-700">
            We offer accommodations for teams of all sizes, from studios to 6-8 bedroom houses, perfect for businesses and contractors in Hertfordshire and across the UK.
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