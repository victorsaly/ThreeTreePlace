<template>
  <section class="py-12 bg-gray-100">
    <div class="max-w-screen-xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center lg:space-x-12">
      <!-- Left Side: Image -->
      <div class="lg:w-1/3 relative">
        <AnimatedImage src="/images/TemporaryAccommodation.png" alt="Temporary Accommodation" class="w-full rounded-lg shadow-md" />
      </div>

      <!-- Right Side: Text Content -->
      <div class="lg:w-2/3 mt-8 lg:mt-0">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Temporary Accommodation</h2>
        <p class="text-gray-700 text-lg leading-relaxed fade-in">
          With access to hundreds of homes across Hertfordshire, <strong>Three Tree Place</strong> specializes in
          catering to your unique accommodation requirements. We simplify the process for people looking for
          accommodation while they're relocating, ensuring they find the ideal place to stay.
        </p>
        <p class="text-gray-700 text-lg leading-relaxed mt-4 fade-in">
          Whether it's a short-term stay of a week or a long-term arrangement until you move into your new place, we
          guarantee a stress-free and seamless experience in securing accommodation for you. Let us handle the logistics
          while you focus on what's most important to you.
        </p>
        <button
          class="cursor-pointer mt-6 px-6 py-3 bg-gray-600 text-white rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
          @click="scrollToContactForm">
          Enquire Now
        </button>
      </div>
    </div>
  </section>
  <section class="py-16 bg-white">
    <div class="max-w-screen-xl mx-auto px-6 lg:px-12">
      <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 fade-in">Temporary Homes for All Needs</h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Feature 1: Staff Relocation -->
        <div class="flex space-x-4 fade-in">
          <span
            class="w-12 h-12 flex-shrink-0 text-gray-800 bg-white rounded-full flex items-center justify-center shadow-md">
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </span>
          <div>
            <h3 class="text-xl font-semibold">Staff Relocation</h3>
            <p class="text-gray-700">
              Book comfortable, ready-to-go accommodation for staff or yourself when relocating for work in the UK. We
              provide a seamless base to settle into areas like Hertfordshire.
            </p>
          </div>
        </div>

        <!-- Feature 2: Moving Homes -->
        <div class="flex space-x-4 fade-in">
          <span
            class="w-12 h-12 flex-shrink-0 text-gray-800 bg-white rounded-full flex items-center justify-center shadow-md">
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2zm0 0l3 3m0 0l3-3m-3 3V5" />
            </svg>
          </span>
          <div>
            <h3 class="text-xl font-semibold">Moving Homes</h3>
            <p class="text-gray-700">
              Waiting for your new home in the UK to be ready? Skip the long hotel stay and reserve your private
              temporary residence in Hertfordshire or nationwide, with flexible stays up to 6 months.
            </p>
          </div>
        </div>

        <!-- Feature 3: Relocating to the UK -->
        <div class="flex space-x-4 fade-in">
          <span
            class="w-12 h-12 flex-shrink-0 text-gray-800 bg-white rounded-full flex items-center justify-center shadow-md">
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </span>
          <div>
            <h3 class="text-xl font-semibold">Relocating to the UK</h3>
            <p class="text-gray-700">
              Moving to the UK? Book temporary accommodation in Hertfordshire or across the UK during your search for a
              permanent home to buy or rent, ensuring a smooth transition.
            </p>
          </div>
        </div>

        <!-- Feature 4: Home Insurance Stays -->
        <div class="flex space-x-4 fade-in">
          <span
            class="w-12 h-12 flex-shrink-0 text-gray-800 bg-white rounded-full flex items-center justify-center shadow-md">
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </span>
          <div>
            <h3 class="text-xl font-semibold">Home Insurance Stays</h3>
            <p class="text-gray-700">
              Had to make a claim on your home insurance in the UK? No stress—we’ve got you covered with comfortable
              temporary accommodations in Hertfordshire and nationwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-16 bg-gray-100">
    <div class="max-w-screen-xl mx-auto px-6 lg:px-12">
      <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 fade-in">What Our Service Includes</h2>
      <ul class="list-disc list-inside text-gray-700 text-lg leading-relaxed fade-in">
        <li>All bills including Utilities and Wi-Fi</li>
        <li>Regular cleaning and linen change</li>
        <li>Self-catering facilities including kitchen, washing machine, and dishwasher</li>
        <li>Convenient locations</li>
        <li>A more cost-effective and comfortable option than a hotel stay</li>
        <li>Long stay discounts</li>
        <li>Work From Home spaces</li>
        <li>On-going support for any additional requests or problems</li>
      </ul>
    </div>
  </section>

  <section class="py-16 bg-white">
    <div class="max-w-screen-xl mx-auto px-6 lg:px-12">
      <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 fade-in">The Process</h2>
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <!-- Step 1: Requirements -->
        <div class="flex flex-col items-center text-center fade-in">
          <span
            class="w-12 h-12 flex-shrink-0 text-gray-800 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </span>
          <h3 class="text-xl font-semibold">Requirements</h3>
          <p class="text-gray-700">
            Fill out the 'Accommodation Enquiry' form, and our team will contact you within 72 hours with suitable
            properties tailored for your needs in Hertfordshire and the UK.
          </p>
        </div>

        <!-- Step 2: Preparation -->
        <div class="flex flex-col items-center text-center fade-in">
          <span
            class="w-12 h-12 flex-shrink-0 text-gray-800 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </span>
          <h3 class="text-xl font-semibold">Preparation</h3>
          <p class="text-gray-700">
            If we have a property available that meets your requirements, it will be offered. Otherwise, we’ll source a
            bespoke property tailored to your business or personal needs across the UK, including Hertfordshire.
          </p>
        </div>

        <!-- Step 3: Move In -->
        <div class="flex flex-col items-center text-center fade-in">
          <span
            class="w-12 h-12 flex-shrink-0 text-gray-800 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2zm0 0l3 3m0 0l3-3m-3 3V5" />
            </svg>
          </span>
          <h3 class="text-xl font-semibold">Move In</h3>
          <p class="text-gray-700">
            Settle into your property comfortably and seamlessly in Hertfordshire or across the UK, enjoying the cost
            savings and time efficiency of our services.
          </p>
        </div>

        <!-- Step 4: Support -->
        <div class="flex flex-col items-center text-center fade-in">
          <span
            class="w-12 h-12 flex-shrink-0 text-gray-800 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          <h3 class="text-xl font-semibold">Support</h3>
          <p class="text-gray-700">
            Our dedicated team member remains available to assist with any further accommodation requirements or changes
            you may have, ensuring a smooth experience in the UK.
          </p>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import AnimatedImage from './AnimatedImage.vue';

export default defineComponent({
  components: { AnimatedImage },
  name: 'TemporaryAccommodation',
  setup() {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add('fade-in-visible');
        }
      });
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Trigger the scroll handler to check initial visibility
    });

    const scrollToContactForm = () => {
      const contactForm = document.getElementById('contact-form');
      if (contactForm) {
        contactForm.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return {
      scrollToContactForm,
    };
  },
});
</script>

<style scoped>
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s ease-out, transform 1s ease-out;
}

.fade-in-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>