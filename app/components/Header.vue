<template>
  <header class="sticky top-0 z-50 bg-white/90 dark:bg-dark-950/90 backdrop-blur-sm border-b border-gray-200 dark:border-dark-800 transition-colors duration-300">
    <div class="container mx-auto px-4 py-3">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center">
          <img 
            src="/images/logo.png" 
            alt="Nhlalala Corporate" 
            class="h-10 md:h-12 w-auto"
          />
        </NuxtLink>
        
        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-8">
          <NuxtLink 
            to="/" 
            class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
            :class="{ 'text-primary-600 dark:text-primary-400': $route.path === '/' }"
          >
            Home
          </NuxtLink>
          <NuxtLink 
            to="/about" 
            class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
            :class="{ 'text-primary-600 dark:text-primary-400': $route.path === '/about' }"
          >
            About
          </NuxtLink>
          <NuxtLink 
            to="/services" 
            class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
            :class="{ 'text-primary-600 dark:text-primary-400': $route.path === '/services' }"
          >
            Services
          </NuxtLink>
          <NuxtLink 
            to="/clients" 
            class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
            :class="{ 'text-primary-600 dark:text-primary-400': $route.path === '/clients' }"
          >
            Clients
          </NuxtLink>
          <NuxtLink 
            to="/contact" 
            class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
            :class="{ 'text-primary-600 dark:text-primary-400': $route.path === '/contact' }"
          >
            Contact
          </NuxtLink>
        </nav>
        
        <div class="flex items-center space-x-4">
          <ColorModeSwitch />
          
          <!-- Mobile menu button -->
          <button 
            class="md:hidden p-2 rounded-full bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
          >
            <Bars3Icon v-if="!isMobileMenuOpen" class="w-5 h-5" />
            <XMarkIcon v-else class="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <!-- Mobile Navigation -->
      <div 
        v-if="isMobileMenuOpen" 
        class="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-dark-700 pt-4"
      >
        <nav class="flex flex-col space-y-4">
          <NuxtLink 
            to="/" 
            class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors py-2"
            :class="{ 'text-primary-600 dark:text-primary-400': $route.path === '/' }"
            @click="isMobileMenuOpen = false"
          >
            Home
          </NuxtLink>
          <NuxtLink 
            to="/about" 
            class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors py-2"
            :class="{ 'text-primary-600 dark:text-primary-400': $route.path === '/about' }"
            @click="isMobileMenuOpen = false"
          >
            About
          </NuxtLink>
          <NuxtLink 
            to="/services" 
            class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors py-2"
            :class="{ 'text-primary-600 dark:text-primary-400': $route.path === '/services' }"
            @click="isMobileMenuOpen = false"
          >
            Services
          </NuxtLink>
          <NuxtLink 
            to="/clients" 
            class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors py-2"
            :class="{ 'text-primary-600 dark:text-primary-400': $route.path === '/clients' }"
            @click="isMobileMenuOpen = false"
          >
            Clients
          </NuxtLink>
          <NuxtLink 
            to="/contact" 
            class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors py-2"
            :class="{ 'text-primary-600 dark:text-primary-400': $route.path === '/contact' }"
            @click="isMobileMenuOpen = false"
          >
            Contact
          </NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import ColorModeSwitch from './ColorModeSwitch.vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/solid'

const isMobileMenuOpen = ref(false)
const route = useRoute()

// Close mobile menu when route changes
watch(() => route.path, () => {
  isMobileMenuOpen.value = false
})
</script>

<style scoped>
.router-link-active {
  @apply text-primary-600 dark:text-primary-400;
}
</style>