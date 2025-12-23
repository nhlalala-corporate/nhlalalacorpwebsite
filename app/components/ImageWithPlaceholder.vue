<template>
  <div class="image-with-placeholder-container" :class="{ loaded: isLoaded, loading: !isLoaded }">
    <img
      :src="placeholder"
      :data-src="src"
      :alt="alt"
      :class="imgClass"
      :style="{ 'background-color': bgColor }"
      ref="imageRef"
      v-bind="$attrs"
    >
    <div
      v-if="!isLoaded"
      class="loading-indicator"
      :style="{ 'background-color': bgColor }"
    >
      <slot name="loading">
        <div class="spinner"></div>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'

interface Props {
  src: string
  alt: string
  placeholder?: string
  bgColor?: string
  imgClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: '/images/placeholder.svg', // Default placeholder image
  bgColor: '#66000000', // Default semi-transparent black
  imgClass: ''
})

const isLoaded = ref(false)
const imageRef = ref<HTMLImageElement | null>(null)

onMounted(() => {
  // Create Intersection Observer to handle lazy loading
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        loadImage()
        observer.unobserve(entry.target)
      }
    })
  }, {
    rootMargin: '50px' // Start loading when image is 50px from viewport
  })

  if (imageRef.value) {
    observer.observe(imageRef.value)
  }
})

const loadImage = () => {
  if (!props.src) return

  const img = new Image()
  img.src = props.src
  img.onload = () => {
    if (imageRef.value) {
      imageRef.value.src = props.src
      isLoaded.value = true
    }
  }
  img.onerror = () => {
    if (imageRef.value) {
      // If the main image fails to load, keep the placeholder
      isLoaded.value = true
    }
  }
}
</script>

<style scoped>
.image-with-placeholder-container {
  position: relative;
  overflow: hidden;
}

.loading-indicator {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #2f93ff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.loaded img {
  opacity: 1;
  transition: opacity 0.3s ease;
}

.loading img {
  opacity: 0.8;
}
</style>