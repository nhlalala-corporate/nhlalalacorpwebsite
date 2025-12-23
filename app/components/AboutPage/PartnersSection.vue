<template>
  <div class="container mx-auto px-4">
    <div class="text-center mb-16 fade-in">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Our Partners</h2>
      <div class="h-1 w-20 bg-primary-600 mx-auto"></div>
      <p class="text-lg text-gray-600 dark:text-gray-400 mt-6 max-w-3xl mx-auto">
        Trusted by 20,000+ customers across the world
      </p>
    </div>

    <!-- Display partners if available, otherwise show fallback message -->
    <div v-if="partnersToDisplay.length > 0" class="grid grid-cols-2 md:grid-cols-4 gap-8">
      <div
        v-for="(partner, index) in partnersToDisplay"
        :key="partner.id || index"
        class="bg-gray-50 dark:bg-dark-700 p-6 rounded-lg flex items-center justify-center h-32"
      >
        <ImageWithPlaceholder
          :src="partner.logo"
          :alt="partner.name"
          class="max-h-24 object-contain"
          placeholder="/images/placeholder.svg"
        />
      </div>
    </div>
    <div v-else class="text-center py-10 text-gray-500">
      Loading partners...
    </div>
  </div>
</template>

<script setup>
import ImageWithPlaceholder from '@/components/ImageWithPlaceholder.vue'
import { ref, onMounted, computed } from 'vue'

const props = defineProps({
  partners: {
    type: Array,
    default: () => []
  }
})

const partnersData = ref([])

onMounted(async () => {
  try {
    if (props.partners?.length) {
      // Use provided partners prop if available
      partnersData.value = props.partners
    } else {
      // Fetch partners from API
      const response = await $fetch('/api/partners')
      partnersData.value = response.partners
      console.log('Partners fetched:', response.partners) // Debug log
    }
  } catch (error) {
    console.error('Error fetching partners:', error)
    // Fallback to default partners if API call fails
    partnersData.value = [
      { id: '1', name: 'Microsoft', logo: '/images/partners/microsoft.png' },
      { id: '2', name: 'VMware', logo: '/images/partners/vmware.png' },
      { id: '3', name: 'Adobe', logo: '/images/partners/adobe.png' },
      { id: '4', name: 'McAfee', logo: '/images/partners/mcafee.png' },
      { id: '5', name: 'DigiCert', logo: '/images/partners/digicert.png' },
      { id: '6', name: 'Bitdefender', logo: '/images/partners/bitdefender.png' },
      { id: '7', name: 'Lenovo', logo: '/images/partners/lenovo.png' },
      { id: '8', name: 'S Software', logo: '/images/partners/ssoftware.png' }
    ]
  }
})

// Computed property to determine which partners to display
const partnersToDisplay = computed(() => partnersData.value.length ? partnersData.value : [])
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