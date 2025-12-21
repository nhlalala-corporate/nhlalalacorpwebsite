<!-- app/components/Navigation/Navigation.vue -->
<template>
  <nav class="bg-white dark:bg-dark-900 border-b border-gray-200 dark:border-dark-700">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <NuxtLink to="/" class="text-xl font-bold text-primary-600 dark:text-white">
            Nhlalala Corporate
          </NuxtLink>
        </div>
        
        <div class="hidden md:block">
          <div class="ml-10 flex items-center space-x-6">
            <NuxtLink to="/" class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Home
            </NuxtLink>
            <NuxtLink to="/about" class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              About
            </NuxtLink>
            <NuxtLink to="/services" class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Services
            </NuxtLink>
            <NuxtLink to="/clients" class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Clients
            </NuxtLink>
            <NuxtLink to="/contact" class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Contact
            </NuxtLink>
          </div>
        </div>
        
        <div class="flex items-center">
          <ColorModeSwitch class="mr-4" />
          <button class="md:hidden text-gray-700 dark:text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import ColorModeSwitch from '@/components/ColorModeSwitch.vue'
</script>