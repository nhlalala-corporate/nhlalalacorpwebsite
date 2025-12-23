<template>
  <section class="py-20 bg-gray-50 dark:bg-dark-900 transition-colors duration-300">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16 fade-in">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">What Our Clients Say</h2>
        <div class="h-1 w-20 bg-primary-600 mx-auto"></div>
        <p class="text-lg text-gray-600 dark:text-gray-400 mt-6 max-w-3xl mx-auto">
          Don't just take our word for it. Here's what our clients have to say about our services.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="(testimonial, index) in testimonials" 
          :key="testimonial.id"
          class="bg-white dark:bg-dark-800 p-8 rounded-xl shadow-sm fade-in"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 rounded-full overflow-hidden mr-4">
              <img 
                :src="testimonial.avatar" 
                :alt="testimonial.name"
                class="w-full h-full object-cover"
                :loading="index > 2 ? 'lazy' : 'eager'"
              >
            </div>
            <div>
              <h3 class="font-bold text-gray-800 dark:text-white">{{ testimonial.name }}</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">{{ testimonial.position }}</p>
            </div>
          </div>
          <p class="text-gray-600 dark:text-gray-300 italic">"{{ testimonial.testimonial }}"</p>
          <div class="flex mt-6">
            <i 
              v-for="n in 5" 
              :key="n"
              class="fas fa-star text-yellow-400 mr-1"
              :class="{ 'text-primary-500': n <= testimonial.rating }"
            ></i>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { data: testimonials } = await useAsyncData('testimonials', () => $fetch('/api/clients'))
</script>

<style scoped>
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
  animation: fadeIn 0.6s ease-out forwards;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>