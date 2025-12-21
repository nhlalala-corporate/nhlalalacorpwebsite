<!-- app/components/UI/Button.vue -->
<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="[
      'px-4 py-2 rounded-lg font-medium transition-colors duration-300',
      'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500',
      'flex items-center justify-center gap-2',
      sizeClasses,
      variantClasses,
      { 'opacity-70 cursor-not-allowed': disabled }
    ]"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'button',
  variant: 'primary',
  size: 'md',
  disabled: false
})

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-800'
    case 'secondary':
      return 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-dark-700 dark:text-white dark:hover:bg-dark-600'
    case 'outline':
      return 'border border-primary-600 text-primary-600 bg-transparent hover:bg-primary-50 dark:text-primary-400 dark:border-primary-400 dark:hover:bg-dark-800'
    case 'ghost':
      return 'text-primary-600 hover:bg-primary-50 dark:text-primary-400 dark:hover:bg-dark-800'
    default:
      return 'bg-primary-600 text-white hover:bg-primary-700'
  }
})

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-3 py-1.5 text-sm'
    case 'lg':
      return 'px-6 py-3 text-lg'
    default:
      return 'px-4 py-2'
  }
})
</script>