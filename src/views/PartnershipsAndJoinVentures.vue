<template>
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
          Partnerships & Joint Ventures Form
        </h1>
        <p class="text-lg text-gray-200 mt-4">
          Interested in a partnership or joint venture with us? Fill in the form below and someone from the team will be in touch.
        </p>
      </div>
    </div>
  </section>
  <section class="bg-white py-12 lg:py-20 fade-in">
    <div class="max-w-screen-xl mx-auto px-6 lg:px-12">
      <h1 class="text-3xl lg:text-5xl font-bold text-gray-900 mb-8">Partnerships and Joint Ventures</h1>
      <p class="text-gray-700 text-lg leading-relaxed mb-8">
        At <strong>Three Tree Place</strong>, we believe in the power of collaboration. Our partnerships and joint ventures are designed to create mutually beneficial relationships that drive success and innovation in the real estate industry.
      </p>
      <p class="text-gray-700 text-lg leading-relaxed mb-8">
        We work with a diverse range of partners, including property developers, investors, and other stakeholders, to deliver high-quality, sustainable housing solutions. Our joint ventures allow us to leverage our combined expertise and resources to achieve greater outcomes.
      </p>
      <p class="text-gray-700 text-lg leading-relaxed mb-8">
        Whether you are looking to invest in a new development, collaborate on a project, or explore other partnership opportunities, we are here to help. Our team is dedicated to building strong, long-lasting relationships that benefit all parties involved.
      </p>
      <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Our Approach</h2>
      <p class="text-gray-700 text-lg leading-relaxed mb-8">
        Our approach to partnerships and joint ventures is centered around transparency, trust, and shared goals. We take the time to understand the unique needs and objectives of our partners, and we work closely with them to develop tailored solutions that meet their specific requirements.
      </p>
      <p class="text-gray-700 text-lg leading-relaxed mb-8">
        From initial discussions to project completion, we are committed to maintaining open lines of communication and fostering a collaborative environment. Our goal is to create value for our partners and deliver exceptional results that exceed expectations.
      </p>
      <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
      <p class="text-gray-700 text-lg leading-relaxed mb-8">
        If you are interested in learning more about our partnerships and joint ventures, we would love to hear from you. Please contact us to discuss how we can work together to achieve your goals.
      </p>
      <a 
            href="https://calendly.com/threetreeplace-demo/30min"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-6 inline-block bg-black text-white text-lg px-6 py-3 rounded-md font-semibold 
                  hover:bg-gray-900 transition duration-300"
          >
            Book a 30 min call
          </a>
    </div>
  </section>
  <ContactForm />

</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import ContactForm from '../components/ContactForm.vue';

export default defineComponent({
    name: 'PartnershipsAndJoinVentures',
    components: {
        ContactForm,
    },
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