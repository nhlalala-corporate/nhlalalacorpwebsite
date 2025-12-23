<template>
  <div class="container mx-auto px-4">
    <div class="text-center mb-16 fade-in">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Our Focus Sectors</h2>
      <div class="h-1 w-20 bg-primary-600 mx-auto"></div>
      <p class="text-lg text-gray-600 dark:text-gray-400 mt-6 max-w-3xl mx-auto">
        We serve a diverse range of industries with tailored technology solutions.
      </p>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div 
        v-for="(sector, index) in focusSectors" 
        :key="index" 
        class="bg-gray-50 dark:bg-dark-900 p-6 rounded-xl transition-all duration-300 hover:shadow-md fade-in flex flex-col items-center text-center"
      >
        <div class="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center text-white flex-shrink-0 mb-3">
          <i :class="`${sector.icon} text-base`"></i>
        </div>
        <h3 class="font-semibold text-gray-800 dark:text-white text-sm">{{ sector.name }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  focusSectors: {
    type: Array,
    default: () => []
  }
})

// Define the default focus sectors if not provided
const defaultFocusSectors = [
  { name: 'Government', icon: 'fas fa-landmark' },
  { name: 'Telco', icon: 'fas fa-broadcast-tower' },
  { name: 'Finance', icon: 'fas fa-coins' },
  { name: 'Insurance', icon: 'fas fa-shield-alt' },
  { name: 'Transportation', icon: 'fas fa-truck' },
  { name: 'Agriculture', icon: 'fas fa-tractor' },
  { name: 'Manufacturing', icon: 'fas fa-industry' },
  { name: 'Mining', icon: 'fas fa-gem' }
]

// Use provided sectors or default if none provided
const sectors = computed(() => focusSectors?.length ? focusSectors : defaultFocusSectors)
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

.gradient-bg {
  background: linear-gradient(135deg, #2f93ff 0%, #0f70f5 100%);
}
</style>