// app/plugins/performance.ts
export default defineNuxtPlugin((nuxtApp) => {
  // Measure page load performance
  if (process.client) {
    // Core Web Vitals monitoring
    const measurePerformance = () => {
      // First Contentful Paint (FCP)
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          console.log('FCP:', entry.startTime)
          // In a real app, you would send this to an analytics service
        }
      }).observe({ entryTypes: ['paint'] })

      // Largest Contentful Paint (LCP)
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          console.log('LCP:', entry.startTime)
          // In a real app, you would send this to an analytics service
        }
      }).observe({ entryTypes: ['largest-contentful-paint'] })

      // First Input Delay (FID)
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          console.log('FID:', entry.processingStart - entry.startTime)
          // In a real app, you would send this to an analytics service
        }
      }).observe({ entryTypes: ['first-input'] })

      // Cumulative Layout Shift (CLS)
      let clsValue = 0
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value
            console.log('Current CLS:', clsValue)
            // In a real app, you would send this to an analytics service
          }
        }
      }).observe({ entryTypes: ['layout-shift'] })
    }

    // Run performance measurement when page loads
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', measurePerformance)
    } else {
      measurePerformance()
    }

    // Performance monitoring for component rendering
    nuxtApp.vueApp.mixin({
      mounted() {
        // Track component mount time
        const mountTime = performance.now()
        console.log(`Component mounted: ${this.$options.name || 'Unknown'} in ${mountTime}ms`)
      }
    })
  }

  return {
    provide: {
      // Expose performance utilities to the app
      performance: {
        measure: (name: string, fn: () => any) => {
          if (process.client) {
            const start = performance.now()
            const result = fn()
            const end = performance.now()
            console.log(`${name} took ${end - start} milliseconds`)
            return result
          } else {
            return fn()
          }
        }
      }
    }
  }
})