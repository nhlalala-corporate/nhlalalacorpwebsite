<template>
  <div class="service-card bg-gray-50 dark:bg-dark-900 p-8 rounded-lg transition-all duration-300 fade-in flex flex-col items-center text-center">
    <div class="w-14 h-14 gradient-bg rounded-lg flex items-center justify-center text-white mb-6">
      <component :is="service.icon" class="w-7 h-7" />
    </div>
    <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-4">{{ service.title }}</h3>

    <!-- Show truncated description by default -->
    <p v-if="!isExpanded" class="text-gray-600 dark:text-gray-400 mb-4">
      {{ truncatedDescription }}
    </p>

    <!-- Show full description when expanded -->
    <div v-else class="text-gray-600 dark:text-gray-400 mb-4">
      <p>{{ service.description }}</p>
      <p v-if="service.details" class="mt-2">{{ service.details }}</p>
    </div>

    <!-- Read more/fold button -->
    <button
      v-if="hasExpandableContent"
      @click="toggleExpand"
      class="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300 font-medium flex items-center"
    >
      {{ isExpanded ? 'Show less' : 'Read more...' }}
      <svg
        :class="['ml-1 w-4 h-4 transition-transform', { 'rotate-180': isExpanded }]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  service: {
    type: Object,
    required: true
  }
})

const isExpanded = ref(false)

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value
}

// Truncate description to first sentence or 100 characters if no sentence ending
const truncatedDescription = computed(() => {
  const desc = props.service.description
  const sentenceEnd = desc.search(/[.!?]\s/)
  if (sentenceEnd !== -1 && sentenceEnd < 100) {
    return desc.substring(0, sentenceEnd + 1)
  }
  return desc.length > 100 ? desc.substring(0, 100) + '...' : desc
})

// Check if content is long enough to warrant expand/collapse
const hasExpandableContent = computed(() => {
  return props.service.description.length > 100 || props.service.details
})
</script>