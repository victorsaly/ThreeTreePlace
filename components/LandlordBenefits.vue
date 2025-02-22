<template>
    <section class="py-16 bg-gray-100">
      <div class="max-w-screen-lg mx-auto px-6 lg:px-12">
        <h2 class="text-3xl font-bold text-center mb-8">Landlord Benefits</h2>
  
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="(benefit, index) in benefits" :key="index" class="flex items-start space-x-4">
            <span class="w-6 h-6 flex-shrink-0">
              <svg class="w-full h-full" viewBox="0 0 24 24" fill="black">
                <circle cx="12" cy="12" r="10"/>
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
          "Guaranteed rent for 3 to 5 years with no void periods.",
          "0% commission fees on Landlord Services.",
          "No hidden costs.",
          "Zero hassle dealing with tenants.",
          "24/7 available support line for tenant issues.",
          "Routine cleaning to uphold high property standards.",
          "Inclusive minor maintenance costs covered.",
          "Light refurbishments provided if necessary."
        ]
      };
    }
  };
  </script>
  