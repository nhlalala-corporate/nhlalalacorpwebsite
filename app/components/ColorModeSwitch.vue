<template>
  <button @click="toggleColorMode" class="p-2 rounded-full bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300 transition-colors">
    <SunIcon v-if="colorMode.value === 'light'" class="w-5 h-5" />
    <MoonIcon v-else class="w-5 h-5" />
  </button>
</template>

<script setup>
import { SunIcon, MoonIcon } from '@heroicons/vue/24/solid'

const colorMode = useColorMode()

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>