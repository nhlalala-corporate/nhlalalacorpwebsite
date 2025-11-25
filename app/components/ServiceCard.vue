<template>
  <div class="service-card bg-gray-50 dark:bg-dark-900 p-8 rounded-lg transition-all duration-300 fade-in">
    <div class="w-14 h-14 gradient-bg rounded-lg flex items-center justify-center text-white mb-6">
      <component :is="service.icon" class="w-7 h-7" />
    </div>
    <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-4">{{ service.title }}</h3>
    <p class="text-gray-600 dark:text-gray-400">{{ service.description }}</p>
  </div>
</template>

<script setup>
defineProps({
  service: {
    type: Object,
    required: true
  }
})
</script>