<template>
    <section class="pb-16 pt-4 bg-gray-100">
      <div class="max-w-screen-xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center lg:space-x-12">
        <!-- Left Side: Image -->
        <div class="lg:w-1/2 relative">
         
          <AnimatedImage
            src="/images/TemporaryAccommodation.png"
            alt="Temporary Accommodation"
            class="w-full"
          />
        </div>
  
        <!-- Right Side: Text Content -->
        <div class="lg:w-1/2 mt-8 lg:mt-0">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Temporary Accommodation</h2>
          <p class="text-gray-700 text-lg leading-relaxed fade-in">
            With access to hundreds of homes across Hertfordshire, <strong>Three Tree Place</strong> specializes in catering to your unique accommodation requirements. We simplify the process for people looking for accommodation while they're relocating, ensuring they find the ideal place to stay.
          </p>
          <p class="text-gray-700 text-lg leading-relaxed mt-4 fade-in">
            Whether it's a short-term stay of a week or a long-term arrangement until you move into your new place, we guarantee a stress-free and seamless experience in securing accommodation for you. Let us handle the logistics while you focus on what's most important to you.
          </p>
          <button class="cursos-pointer mt-6 px-6 py-3 bg-gray-600 text-white rounded-lg shadow-md hover:bg-gray-700 transition duration-300" v-scroll-to="'#contact-form'">
            Enquire Now
          </button>
        </div>
      </div>
    </section>
  
    <section class="py-16 bg-white">
      <div class="max-w-screen-xl mx-auto px-6 lg:px-12">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 fade-in">Temporary Homes for All Needs</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Feature 1 -->
          <div class="flex space-x-4 fade-in">
            <span class="w-12 h-12 flex-shrink-0 text-gray-800 bg-white rounded-full flex items-center justify-center shadow-md">
              <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M8 10v6m4-6v6m4-6v6m-2-12V4a2 2 0 10-4 0v4m-6 4h16m2 0a2 2 0 01-2 2h-1a2 2 0 00-4 0h-2a2 2 0 00-4 0H6a2 2 0 01-2-2H2" />
              </svg>
            </span>
            <div>
              <h3 class="text-xl font-semibold">Staff Relocation</h3>
              <p class="text-gray-700">
                Book accommodation for staff or yourself when relocating for work. We offer a comfortable and ready-to-go base to settle into a new area.
              </p>
            </div>
          </div>
  
          <!-- Feature 2 -->
          <div class="flex space-x-4 fade-in">
            <span class="w-12 h-12 flex-shrink-0 text-gray-800 bg-white rounded-full flex items-center justify-center shadow-md">
              <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </span>
            <div>
              <h3 class="text-xl font-semibold">Moving Homes</h3>
              <p class="text-gray-700">
                Waiting for your new home to be ready? Skip the long hotel stay and reserve your own private temporary residence. Flexible stays up to 6 months.
              </p>
            </div>
          </div>
  
          <!-- Feature 3 -->
          <div class="flex space-x-4 fade-in">
            <span class="w-12 h-12 flex-shrink-0 text-gray-800 bg-white rounded-full flex items-center justify-center shadow-md">
              <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </span>
            <div>
              <h3 class="text-xl font-semibold">Relocating to the UK</h3>
              <p class="text-gray-700">
                Moving to the UK? Book temporary accommodation during your search for a permanent home to buy or rent in the UK.
              </p>
            </div>
          </div>
  
          <!-- Feature 4 -->
          <div class="flex space-x-4 fade-in">
            <span class="w-12 h-12 flex-shrink-0 text-gray-800 bg-white rounded-full flex items-center justify-center shadow-md">
              <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </span>
            <div>
              <h3 class="text-xl font-semibold">Home Insurance Stays</h3>
              <p class="text-gray-700">
                Had to make a claim on your home insurance? No stress, we've got you covered with our accommodations nationwide.
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
          <!-- Step 1 -->
          <div class="flex flex-col items-center text-center fade-in">
            <span class="w-12 h-12 flex-shrink-0 text-gray-800 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
              <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
                <path d="M12 6v6l4 2" />
              </svg>
            </span>
            <h3 class="text-xl font-semibold">Requirements</h3>
            <p class="text-gray-700">
              Fill out the 'Accommodation Enquiry' form and someone from our team will be in touch with any suitable properties within 72 hours.
            </p>
          </div>
  
          <!-- Step 2 -->
          <div class="flex flex-col items-center text-center fade-in">
            <span class="w-12 h-12 flex-shrink-0 text-gray-800 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
              <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
                <path d="M12 6v6l4 2" />
              </svg>
            </span>
            <h3 class="text-xl font-semibold">Preparation</h3>
            <p class="text-gray-700">
              If we have a property available that meets your requirements, it will be offered. Otherwise, we source a bespoke property tailored to your needs.
            </p>
          </div>
  
          <!-- Step 3 -->
          <div class="flex flex-col items-center text-center fade-in">
            <span class="w-12 h-12 flex-shrink-0 text-gray-800 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
              <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
                <path d="M12 6v6l4 2" />
              </svg>
            </span>
            <h3 class="text-xl font-semibold">Move In</h3>
            <p class="text-gray-700">
              You settle into the property comfortably and seamlessly, while you benefit from the savings and time saved from our services.
            </p>
          </div>
  
          <!-- Step 4 -->
          <div class="flex flex-col items-center text-center fade-in">
            <span class="w-12 h-12 flex-shrink-0 text-gray-800 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
              <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
                <path d="M12 6v6l4 2" />
              </svg>
            </span>
            <h3 class="text-xl font-semibold">Support</h3>
            <p class="text-gray-700">
              A dedicated team member stays available to assist with any further accommodation requirements or changes you may have.
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
  
      return {};
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