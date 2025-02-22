<template>
  <section class="relative bg-white py-12 lg:py-20">
    <div class="hero-background"></div>
    <!-- Container -->
    <div class="max-w-screen-xl mx-auto px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center lg:space-x-12 relative z-10">
      <!-- Left Column: Text -->
      <div class="w-full lg:w-1/2 mt-6 lg:mt-0">
        <p class="text-xl font-light text-gray-600 mb-2 fade-in">
          Your Home Away from Home in Hertfordshire
        </p>
        <h1 class="text-4xl md:text-6xl font-black leading-tight text-gray-900 slide-in">
          THREE TREE PLACE
        </h1>
        <p class="text-base md:text-lg text-gray-600 mt-6 fade-in">
          Discover Three Tree Place, Hertfordshire’s premier serviced accommodation for businesses, contractors, and landlords. Whether you are a company arranging stays for employees, a business traveler seeking convenience, or a landlord renting on behalf of tenants, we provide tailored, high-quality properties in the heart of the UK.
        </p>
        <p class="text-base md:text-lg text-gray-600 mt-4 fade-in">
          Enjoy comfort, flexibility, and exceptional service with our fully managed rentals. From short-term business trips to longer contractor assignments, Three Tree Place is your trusted partner in Hertfordshire.
        </p>
      </div>

      <!-- Right Column: Image -->
      <div class="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <img
          src="/images/image.png"
          alt="House Rental"
          class="rounded-lg shadow-md lg:max-w-lg"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 105%;
  height: 105%;
  background: url('../assets/three-trees.svg') no-repeat center center;
  background-size: contain;
  opacity: 0.4;
  animation: moveBackground 60s linear infinite;
}

@keyframes moveBackground {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(-50%, -1%);
  }
  100% {
    transform: translate(0, 0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn 1s ease-in-out;
}

.slide-in {
  animation: slideIn 1s ease-in-out;
}
</style>