<template>
  <section class="py-16 bg-white">
    <div class="max-w-screen-lg mx-auto px-6 lg:px-12">
      <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
      
      <div class="divide-y divide-gray-300 border border-gray-300 rounded-lg">
        <div v-for="(faq, index) in faqs" :key="index" class="overflow-hidden">
          <button
            class="faq-question flex justify-between items-center w-full text-left text-lg font-semibold p-4 focus:outline-none"
            :class="{ 'bg-gray-100': activeIndex === index }"
            @click="toggleFAQ(index)"
          >
            {{ faq.question }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 transition-transform transform"
              :class="{ 'rotate-180': activeIndex === index }"
              viewBox="0 0 24 24"
              fill="black"
            >
              <path d="M5 15l7-7 7 7" />
            </svg>
          </button>
          <div v-if="activeIndex === index" class="p-4 bg-gray-100 text-gray-800">
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'FAQSection',
  setup() {
    const faqs = ref([
        {
          question: "How Do I Check In?",
          answer: "Access to our properties is completely self-service, ensuring a smooth and hassle-free experience. Check-in details will be sent with clear instructions on the day of arrival."
        },
        {
          question: "What Are The Check-In & Check-Out Times?",
          answer: "Check-in is from 3:00 PM, and check-out is at 11:00 AM. Subject to availability, early check-in or late check-out may be possible if requested at least 24 hours in advance."
        },
        {
          question: "What is KeyNest?",
          answer: "KeyNest allows guests to collect their property keys from secure locations, often within local grocery stores. Instructions, including the KeyNest location and collection code, will be provided before your arrival."
        },
        {
          question: "Can I Extend My Booking?",
          answer: "Yes, subject to availability. If you'd like to extend your stay, please contact us as early as possible so we can make the necessary arrangements."
        },
        {
          question: "Do You Take A Security Deposit?",
          answer: "Yes, a refundable security deposit is required for all bookings. This is held during your stay and returned upon successful check-out following a property inspection."
        },
        {
          question: "What Is Your Cancellation Policy?",
          answer: "Our cancellation policy varies depending on the type of booking. Please refer to your booking confirmation email for details. If you have any questions, feel free to contact us."
        },
        {
          question: "Can We Smoke Inside The Apartments?",
          answer: "No. Smoking in any of our properties is strictly prohibited. This is due to health and safety and to main the properties standards",
        },
        {
          question: "Do You Allow Pets?",
          answer: "We do not allow pets in our properties. This is to ensure the comfort and safety of all our guests, including those with allergies."
        },
        {
          question: "Is Parking Available?",
          answer: "Parking is available at most of our properties. Please refer to your booking confirmation email for details on parking availability and instructions."
        },
        {
          question: "What If I Have A Problem During My Stay?",
          answer: "We are committed to providing exceptional service and ensuring your stay is comfortable and enjoyable. If you encounter any issues during your stay, please contact us immediately so we can assist you."
        },
        {
          question: "Can I Host A Party Or Event?",
          answer: "No. Our properties are intended for residential use only. Hosting parties or events is strictly prohibited to ensure the comfort and safety of all guests."
        },
        {
          question: "Do You Offer Corporate Rates?",
          answer: "Yes, we offer corporate rates for businesses and professionals seeking accommodation for their employees. Please contact us for more information on our corporate rates and services."
        }
    ]);

    const activeIndex = ref<number | null>(null);

    const toggleFAQ = (index: number) => {
      activeIndex.value = activeIndex.value === index ? null : index;
    };

    return {
      faqs,
      activeIndex,
      toggleFAQ,
    };
  },
});
</script>

<style scoped>
.faq-question {
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.faq-question:hover {
  background-color: #f3f4f6; /* Light gray background on hover */
  color: #1f2937; /* Darker text color on hover */
}
</style>