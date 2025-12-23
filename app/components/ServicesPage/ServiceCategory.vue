<template>
  <div class="service-category">
    <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-4">{{ category.name }}</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ServiceCard
        v-for="(service, index) in category.services"
        :key="index"
        :service="service"
      />
    </div>
  </div>
</template>

<script setup>
import ServiceCard from '@/components/ServiceCard.vue'

defineProps({
  category: {
    type: Object,
    required: true
  }
})
</script>