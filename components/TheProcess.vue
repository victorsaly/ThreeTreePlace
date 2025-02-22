<template>
    <section class="py-16 bg-white text-center">
      <div class="max-w-screen-lg mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8">The Process</h2>
  
        <div class="grid grid-cols-4 gap-8 items-center">
          <div v-for="(step, index) in steps" :key="index" class="flex flex-col items-center">
            <img :src="step.icon" :alt="step.title" class="w-12 h-12 mb-4"/>
            <h3 class="font-semibold text-lg">{{ step.title }}</h3>
            <p class="text-gray-600 text-sm mt-2">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        steps: [
          { title: "Agree Rental Terms", description: "The rental term and monthly rent are agreed upon with the landlord.", icon: "/icons/handshake.svg" },
          { title: "Sign Contract", description: "A legally binding agreement is signed by both parties.", icon: "/icons/contract.svg" },
          { title: "Prepare the Property", description: "We assess and plan refurbishments or furniture sourcing.", icon: "/icons/house.svg" },
          { title: "Maintenance", description: "Necessary maintenance is carried out, and tenant concerns addressed.", icon: "/icons/wrench.svg" }
        ]
      };
    }
  };
  </script>