<template>
    <section class="py-16 bg-gray-100">
      <div class="max-w-screen-xl mx-auto px-6 lg:px-12 text-center">
        <!-- Heading -->
        <h2 class="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
          How Does Guaranteed Rent Work?
        </h2>
        <p class="text-gray-700 text-lg max-w-3xl mx-auto">
          We take on full responsibility for your property, providing landlords with guaranteed,  
          hassle-free monthly rental income. No voids, no tenant worries—just reliable earnings.
        </p>
  
        <!-- Benefits List -->
        <h3 class="text-2xl font-semibold text-gray-900 mt-12 mb-6">Why partner with us?</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
          <div v-for="(benefit, index) in benefits" :key="index" class="flex items-start space-x-4">
            <span class="w-8 h-8 flex-shrink-0">
              <!-- Placeholder Icon -->
              <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" viewBox="0 0 24 24" fill="black">
                <circle cx="12" cy="12" r="10" />
              </svg>
            </span>
            <p class="text-gray-800 text-lg">{{ benefit }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        benefits: [
          "Fixed rental income for 3 to 5 years with no void periods",
          "No management or service fees—keep 100% of your rental income",
          "Transparent agreements with no hidden costs",
          "We manage all tenant-related issues, so you don’t have to",
          "24/7 dedicated support team for any property concerns",
          "Regular professional cleaning to maintain high standards",
          "All minor maintenance issues covered at no extra cost",
          "Light refurbishments provided when necessary to keep your property in excellent condition"
        ],
      };
    },
  };
  </script>