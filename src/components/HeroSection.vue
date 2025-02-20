<template>
  <section class="relative bg-white py-12 lg:py-20">

    <div class="hero-background"></div>
    <!-- Container -->
    <div class="max-w-screen-xl mx-auto px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center lg:space-x-12 relative z-10">
      <!-- Left Column: Text -->
      <div class="w-full lg:w-1/2">
        <p class="text-xl font-light text-gray-600 mb-2 fade-in">
          Say hello, to your
        </p>
        <h1 class="text-4xl md:text-6xl font-black leading-tight text-gray-900 slide-in">
          THREE TREE PLACE
        </h1>
        <p class="text-base md:text-lg text-gray-600 mt-6 fade-in">
          Welcome to Three Tree Place, your ideal destination for top-tier
          serviced accommodation. Whether you're a guest seeking a comfortable
          stay, a business traveler in need of convenience, or a contractor on
          assignment, we offer the perfect solution tailored to your
          requirements.
        </p>
        <p class="text-base md:text-lg text-gray-600 mt-4 fade-in">
          With our carefully curated properties and dedicated service team,
          experience the epitome of comfort, convenience, and hospitality. Your
          ideal temporary home awaits at Three Tree Place.
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