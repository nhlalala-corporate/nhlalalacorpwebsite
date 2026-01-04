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
        recaptchaSiteKey: process.env.RECAPTCHA_SITE_KEY || '6Lco1TUsAAAAAFrh1KB1Yi2Yul73U74-b4fsxaU2'
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
        recaptchaSiteKey: process.env.RECAPTCHA_SITE_KEY || '6Lco1TUsAAAAAFrh1KB1Yi2Yul73U74-b4fsxaU2'
      }
    })
  }
})