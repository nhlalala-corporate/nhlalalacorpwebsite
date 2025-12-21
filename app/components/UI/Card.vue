<!-- app/components/UI/Card.vue -->
<template>
  <div 
    :class="[
      'rounded-xl border border-gray-200 bg-white shadow-sm dark:border-dark-700 dark:bg-dark-800 transition-colors duration-300',
      { 'p-6': hasPadding },
      { 'hover:shadow-md': hoverEffect }
    ]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  hasPadding?: boolean
  hoverEffect?: boolean
}

withDefaults(defineProps<Props>(), {
  hasPadding: true,
  hoverEffect: false
})
</script>