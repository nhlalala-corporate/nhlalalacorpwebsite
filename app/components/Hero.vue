<template>
  <section class="hero-section relative py-32 text-white overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-700/80 z-0"></div>
    
    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-3xl mx-auto text-center fade-in">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          You Dream We Design
        </h1>
        
        <div class="text-xl md:text-2xl lg:text-3xl mb-10 min-h-[2.5rem]">
          <span class="animated-word" :class="{ active: currentWordIndex === index }" 
                v-for="(word, index) in words" :key="index">
            {{ word }}
          </span>
        </div>
        
        <p class="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
          At Nhlalala Corporate, we transform your vision into digital reality with cutting-edge technology solutions.
        </p>
        
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <NuxtLink to="/contact" class="px-8 py-3 bg-white text-primary-700 font-medium rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
            Get Started
          </NuxtLink>
          <NuxtLink to="/services" class="px-8 py-3 bg-primary-800 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors shadow-lg">
            Our Services
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const words = ref(['SOFTWARE', 'WEBSITE', 'INFRASTRUCTURE'])
const currentWordIndex = ref(0)

let interval

onMounted(() => {
  // Set up the word rotation animation
  interval = setInterval(() => {
    currentWordIndex.value = (currentWordIndex.value + 1) % words.value.length
  }, 3000) // Change word every 3 seconds
  
  // Set up intersection observer for fade-in animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el)
  })
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<style scoped>
.hero-section {
  background-image: url('/images/background.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.animated-word {
  position: absolute;
  left: 0;
  right: 0;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.animated-word.active {
  opacity: 1;
  transform: translateY(0);
}

.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>