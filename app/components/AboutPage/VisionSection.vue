<template>
  <div class="bg-white dark:bg-dark-800 p-8 rounded-2xl shadow-sm fade-in">
    <div class="w-14 h-14 gradient-bg rounded-lg flex items-center justify-center text-white mb-6">
      <i class="fas fa-eye text-2xl"></i>
    </div>
    <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">Our Vision</h3>
    <p class="text-gray-600 dark:text-gray-400">
      To be the leading technology partner for organizations across Africa, recognized for our innovation, excellence, and commitment to sustainable transformation.
    </p>
  </div>
</template>

<script setup>
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