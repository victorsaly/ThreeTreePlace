<template>
    <section class="py-16 bg-gray-900 text-white">
      <div class="max-w-screen-xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        <!-- Our Responsibilities -->
        <div>
          <h2 class="text-3xl font-bold border-b border-gray-500 pb-4">Our Responsibilities</h2>
          <ul class="mt-6 space-y-4">
            <li v-for="(item, index) in ourResponsibilities" :key="index" class="flex items-start space-x-3">
              <span class="w-6 h-6 flex-shrink-0">
                <svg class="w-full h-full" viewBox="0 0 24 24" fill="white">
                  <circle cx="12" cy="12" r="10"/>
                </svg>
              </span>
              <p>{{ item }}</p>
            </li>
          </ul>
        </div>
  
        <!-- Your Responsibilities -->
        <div>
          <h2 class="text-3xl font-bold border-b border-gray-500 pb-4">Your Responsibilities</h2>
          <ul class="mt-6 space-y-4">
            <li v-for="(item, index) in yourResponsibilities" :key="index" class="flex items-start space-x-3">
              <span class="w-6 h-6 flex-shrink-0">
                <svg class="w-full h-full" viewBox="0 0 24 24" fill="white">
                  <circle cx="12" cy="12" r="10"/>
                </svg>
              </span>
              <p>{{ item }}</p>
            </li>
          </ul>
        </div>
  
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        ourResponsibilities: [
          "Manage all tenant inquiries and address any concerns.",
          "Pay rent on time each month for 3 - 5 years.",
          "Cover all utility and council tax bills.",
          "Handle minor repairs to the property.",
          "Conduct regular property checks.",
          "Provide routine cleaning services."
        ],
        yourResponsibilities: [
          "Maintain key structural features such as the roof, boiler, and electrics.",
          "Ensure the required corporate letting insurance is in place.",
          "Continue managing any existing mortgage payments.",
          "Ensure that gas, electricity, and Energy Performance Certificate (EPC) are up to date."
        ]
      };
    }
  };
  </script>