<template>
    <div>

  <section class="relative w-full h-[450px] lg:h-[500px] overflow-hidden">
    <video
      autoplay
      muted
      loop
      playsinline
      class="absolute top-0 left-0 w-full h-full object-cover"
    >   
      <source src="../assets/watford_video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/50 flex items-center justify-center text-center">
      <div class="px-6">
        <h1 class="text-3xl lg:text-5xl font-bold text-white">
          PROPERTIES WANTED IN <br />
          <span class="text-gray-300">HERTFORDSHIRE</span>
        </h1>
        <p class="text-lg text-gray-200 mt-4">
          Guaranteed rent, on time, every single month. What’s not to like?
        </p>
      </div>
    </div>
  </section>
    <section class="py-16 bg-white">
    <div class="max-w-screen-xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center lg:space-x-12">
      
      <!-- Left Content: Text -->
      <div class="lg:w-2/3">
        <h2 class="text-3xl lg:text-5xl font-bold text-gray-900">
          GUARANTEED RENT FOR <br />
          YOUR PROPERTY IN <span class="text-black font-extrabold">HERTFORDSHIRE</span>
        </h2>
        <p class="text-gray-700 text-lg mt-4">
          With demand for quality accommodations soaring, we are actively looking for properties and apartments for rent in <strong>Hertfordshire</strong>.  
          We offer a <strong>guaranteed monthly rental income</strong>, providing landlords with financial stability.
        </p>
        <p class="text-gray-700 text-lg mt-4">
          Experience a <strong>hassle-free way of renting</strong>, with <strong>no void periods</strong>, <strong>no agency fees</strong>, and a seamless long-term agreement.
        </p>

        <h3 class="text-xl font-semibold text-gray-900 mt-6">Guaranteed Rent With 0% Agency Fees!</h3>
        <p class="text-gray-700 text-lg mt-2">
          There are <strong>no hidden fees</strong>—we manage all property maintenance, tenant relations, and ensure that  
          your property remains in top condition.
        </p>
        <p class="text-gray-700 text-lg mt-2">
          No emergency call-outs, <strong>no missed rent payments</strong>, and a truly <strong>stress-free landlord experience</strong>.
        </p>
      </div>

      <!-- Right Content: Image -->
      <div class="lg:w-1/3 mt-8 lg:mt-0">
        
        <AnimatedImage
            src="/images/RentProperty.png"
            alt="Temporary Accommodation"
            class="w-full rounded-lg shadow-md"
          />
      </div>
    </div>
  </section>
  </div>
 
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GuaranteedRentInHerts',
});
</script>

<style scoped>
/* Add any additional styles if needed */
</style>