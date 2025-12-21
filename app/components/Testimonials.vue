<!-- app/components/Testimonials.vue -->
<template>
  <div>
    <section v-if="testimonials && testimonials.length > 0" class="py-20 bg-gray-50 dark:bg-dark-900 transition-colors duration-300">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16 fade-in">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">What Our Clients Say</h2>
          <div class="h-1 w-20 bg-primary-600 mx-auto"></div>
          <p class="text-lg text-gray-600 dark:text-gray-400 mt-6 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="testimonial in testimonials"
            :key="testimonial.id"
            class="bg-white dark:bg-dark-800 p-8 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md fade-in"
          >
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 rounded-full bg-gray-300 dark:bg-dark-700 flex items-center justify-center text-white font-bold mr-4">
                {{ testimonial.name.charAt(0) }}
              </div>
              <div>
                <h4 class="font-bold text-gray-800 dark:text-white">{{ testimonial.name }}</h4>
                <p class="text-gray-600 dark:text-gray-400 text-sm">{{ testimonial.position }}</p>
              </div>
            </div>
            <p class="text-gray-600 dark:text-gray-400 italic">"{{ testimonial.testimonial }}"</p>
            <div class="flex mt-4">
              <i v-for="star in 5" :key="star" class="fas fa-star text-yellow-400"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useAsyncData } from '#app'

const { data: testimonials } = await useAsyncData('testimonials', () => $fetch('/api/clients'), {
  default: () => [
  ]
})
</script>

<style scoped>
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