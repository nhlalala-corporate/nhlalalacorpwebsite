// app/composables/useI18n.ts
import { ref, computed } from 'vue'

interface Translations {
  [key: string]: string
}

export const useI18n = () => {
  const currentLanguage = ref('en')
  const translations = ref<Translations>({})
  
  // Supported African languages
  const supportedLanguages = [
    { code: 'en', name: 'English' },
    { code: 'af', name: 'Afrikaans' },
    { code: 'zu', name: 'Zulu' },
    { code: 'xh', name: 'Xhosa' },
    { code: 'st', name: 'Sotho' },
    { code: 'ts', name: 'Tsonga' },
    { code: 'ss', name: 'Swati' },
    { code: 've', name: 'Venda' },
    { code: 'nr', name: 'Ndebele' }
  ]

  // Function to load translations for a specific language
  const loadTranslations = async (lang: string) => {
    try {
      // In a real implementation, this would fetch translations from an API
      // For now, we'll use a mock implementation
      const response = await $fetch(`/api/i18n/${lang}`)
      translations.value = response as Translations
      currentLanguage.value = lang
    } catch (error) {
      console.error(`Failed to load translations for ${lang}:`, error)
      // Fallback to English if loading fails
      if (lang !== 'en') {
        await loadTranslations('en')
      }
    }
  }

  // Function to change the current language
  const setLanguage = async (lang: string) => {
    if (supportedLanguages.some(l => l.code === lang)) {
      await loadTranslations(lang)
    } else {
      console.warn(`Language ${lang} is not supported. Available languages:`, 
        supportedLanguages.map(l => l.code))
    }
  }

  // Function to get a translation
  const t = (key: string): string => {
    return translations.value[key] || key
  }

  // Initialize with English translations
  const init = async () => {
    await loadTranslations('en')
  }

  return {
    currentLanguage: computed(() => currentLanguage.value),
    supportedLanguages,
    t,
    setLanguage,
    init
  }
}