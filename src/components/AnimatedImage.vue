<template>
  <img
    :src="src"
    :alt="alt"
    ref="imageRef"
    :class="['image-animation', customClass]"
  />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  name: 'AnimatedImage',
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    customClass: {
      type: String,
      default: '',
    },
  },
  setup() {
    const imageRef = ref<HTMLElement | null>(null);

    const handleScroll = () => {
      if (imageRef.value) {
        const rect = imageRef.value.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          imageRef.value.classList.add('image-animation-visible');
        }
      }
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Trigger the scroll handler to check initial visibility
    });

    return {
      imageRef,
    };
  },
});
</script>

<style scoped>
.image-animation {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s ease-out, transform 1s ease-out;
}

.image-animation-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>