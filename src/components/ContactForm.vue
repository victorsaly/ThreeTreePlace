<template>

  <section class="bg-gray-900 py-16" id="contact-form">
    <div class="max-w-screen-xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 text-gray-100">
      <!-- Left Column: Address and Contact Info -->
      <div>
        <h2 class="text-3xl font-bold mb-6">Get in touch</h2>
        <!-- <div class="mb-8">
          <h3 class="text-lg font-semibold mb-2">Address</h3>
          <p class="text-gray-300 leading-relaxed">
            Address here
          </p>
        </div> -->
        <div>
          <h3 class="text-lg font-semibold mb-2">Contact</h3>
          <p class="text-gray-300 leading-relaxed">
            Email: <a class="text-gray-100 underline" href="mailto:info@threetreeplace.com">info@threetreeplace.com</a> <br />
            <!-- Phone: <a class="text-gray-100 underline" href="tel:+44000">0000</a> -->
          </p>
        </div>
      </div>

      <!-- Right Column: Contact Form -->
      <div formsappId="67b6dbe1c6c3720002d60903"></div>     

    </div>

  </section>
</template>
<script>
export default {
  mounted() {
    const script = document.createElement('script');
    script.src = "https://forms.app/static/embed.js";
    script.type = "text/javascript";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      new formsapp('67b6dbe1c6c3720002d60903', 'standard', {'width':'100vw','height':'800px','opacity':1}, 'https://5ss0b408.forms.app');
    };
    document.body.appendChild(script);
  },
}
</script>