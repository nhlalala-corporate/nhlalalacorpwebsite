// vitest.config.ts
import { defineConfig } from 'vitest/config'
import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    environment: 'nuxt',
    environmentOptions: {
      nuxt: {
        rootDir: './',
        overrides: {
          // Any runtime config you want to override for tests
          runtimeConfig: {
            public: {
              recaptchaSiteKey: process.env.RECAPTCHA_SITE_KEY || '6Lco1TUsAAAAAFrh1KB1Yi2Yul73U74-b4fsxaU2'
            }
          }
        }
      }
    },
    setupFiles: ['./__tests__/setup.ts'],
    include: ['__tests__/**/*.test.ts'],
    globals: true,
  },
})