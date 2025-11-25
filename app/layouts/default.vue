<template>
  <div class="min-h-screen flex flex-col bg-white dark:bg-dark-950 font-sans transition-colors duration-300">
    <Header />
    <main class="flex-grow">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>