<template>
  <img
    :src="src"
    :alt="alt"
    ref="imageRef"
    :class="['image-animation', { 'image-animation-visible': isVisible }, customClass]"
    loading="lazy"
    @load="onImageLoad"
  />
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref, type Ref } from 'vue';

// Define HTMLImageElement type explicitly if needed
interface HTMLImageElement extends HTMLElement {
  src: string;
  alt: string;
  // Add other properties as needed
}

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
    // Use HTMLImageElement with Ref
    const imageRef: Ref<HTMLImageElement | null> = ref(null);
    const isVisible = ref(false);

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
          observer?.unobserve(entry.target); // Optional chaining for safety
        }
      });
    };

    let observer: IntersectionObserver | null = null;

    onMounted(() => {
      if (imageRef.value) {
        observer = new IntersectionObserver(handleIntersection, {
          root: null, // Use viewport as root
          rootMargin: '0px', // Trigger when image is fully in view
          threshold: 0.1, // Trigger when 10% of image is visible
        });
        observer.observe(imageRef.value);
      }
    });

    onUnmounted(() => {
      if (observer && imageRef.value) {
        observer.unobserve(imageRef.value);
      }
      window.removeEventListener('scroll', handleScroll); // Clean up scroll listener
    });

    // Fallback scroll handler for initial check or unsupported browsers
    const handleScroll = () => {
      if (imageRef.value && !isVisible.value) {
        const rect = imageRef.value.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          isVisible.value = true;
        }
      }
    };

    const onImageLoad = () => {
      handleScroll(); // Check visibility once image loads
    };

    return {
      imageRef,
      isVisible,
      onImageLoad,
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