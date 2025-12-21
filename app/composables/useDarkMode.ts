// app/composables/useDarkMode.ts
export const useDarkMode = () => {
  const colorMode = useColorMode()

  const isDark = computed({
    get: () => colorMode.value === 'dark',
    set: (val) => {
      colorMode.value = val ? 'dark' : 'light'
    }
  })

  const toggleDarkMode = () => {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }

  return {
    isDark,
    toggleDarkMode
  }
}