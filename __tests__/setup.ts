// __tests__/setup.ts
// Setup file for tests

import { vi } from 'vitest'

// Mock Nuxt runtime config
vi.mock('#app', async () => {
  const mod = await vi.importActual('#app')
  return {
    ...mod,
    useRuntimeConfig: () => ({
      public: {
        recaptchaSiteKey: '6LcNOeAqAAAAAKytEs1lmc6ic2-ft8iwFSVKDSov'
      }
    })
  }
})

// Mock $fetch
vi.stubGlobal('$fetch', vi.fn())

// Mock Nuxt composables
vi.mock('#imports', async () => {
  const mod = await vi.importActual('#imports')
  return {
    ...mod,
    useRuntimeConfig: () => ({
      public: {
        recaptchaSiteKey: '6LcNOeAqAAAAAKytEs1lmc6ic2-ft8iwFSVKDSov'
      }
    })
  }
})