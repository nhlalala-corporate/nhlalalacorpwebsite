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
              recaptchaSiteKey: '6LcNOeAqAAAAAKytEs1lmc6ic2-ft8iwFSVKDSov'
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