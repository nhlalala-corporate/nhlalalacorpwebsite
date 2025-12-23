<template>
  <div>
    <section class="py-20 bg-gray-50 dark:bg-dark-900 transition-colors duration-300">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16 fade-in">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Our Valued Clients</h2>
          <div class="h-1 w-20 bg-primary-600 mx-auto"></div>
          <p class="text-lg text-gray-600 dark:text-gray-400 mt-6 max-w-3xl mx-auto">
            We take pride in partnering with leading organizations across various sectors to deliver innovative technology solutions.
          </p>
        </div>
        
        <!-- Logo Slider Component -->
        <ClientsSlider />
        
        <!-- Testimonials Section -->
        <div class="mt-20 fade-in">
          <div class="text-center mb-12">
            <h3 class="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">What Our Clients Say</h3>
            <div class="h-1 w-16 bg-primary-600 mx-auto"></div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white dark:bg-dark-800 p-8 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 gradient-bg rounded-full flex items-center justify-center text-white font-bold mr-4">MM</div>
                <div>
                  <h4 class="font-bold text-gray-800 dark:text-white">Matsobane Masenya</h4>
                  <p class="text-gray-600 dark:text-gray-400 text-sm">IT Manager, PRASA</p>
                </div>
              </div>
              <p class="text-gray-600 dark:text-gray-400 italic">
                "Nhlalala Corporate delivered an exceptional cybersecurity solution that has significantly enhanced our data protection capabilities. Their team was professional and met all deadlines."
              </p>
            </div>
            
            <div class="bg-white dark:bg-dark-800 p-8 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 gradient-bg rounded-full flex items-center justify-center text-white font-bold mr-4">TM</div>
                <div>
                  <h4 class="font-bold text-gray-800 dark:text-white">Thokozile Mahlaola</h4>
                  <p class="text-gray-600 dark:text-gray-400 text-sm">CEO, The Cherry Blue House</p>
                </div>
              </div>
              <p class="text-gray-600 dark:text-gray-400 italic">
                "The website developed by Nhlalala Corporate has transformed our online presence. We've seen a 40% increase in customer engagement since launch."
              </p>
            </div>
             <div class="bg-white dark:bg-dark-800 p-8 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 gradient-bg rounded-full flex items-center justify-center text-white font-bold mr-4">TM</div>
                <div>
                  <h4 class="font-bold text-gray-800 dark:text-white">Thokozile Mahlaola</h4>
                  <p class="text-gray-600 dark:text-gray-400 text-sm">CEO, The Cherry Blue House</p>
                </div>
              </div>
              <p class="text-gray-600 dark:text-gray-400 italic">
                "The website developed by Nhlalala Corporate has transformed our online presence. We've seen a 40% increase in customer engagement since launch."
              </p>
            </div>
          </div>
        </div>
        
        <!-- CTA Section -->
        <div class="mt-20 gradient-bg rounded-2xl p-10 text-center text-white fade-in">
          <h3 class="text-2xl md:text-3xl font-bold mb-6">Become Our Next Success Story</h3>
          <p class="text-lg opacity-90 mb-8 max-w-3xl mx-auto">
            Partner with us to leverage technology for your organization's growth and transformation.
          </p>
          <NuxtLink to="/contact" class="inline-block px-8 py-3 bg-white text-primary-700 font-medium rounded-lg hover:bg-gray-100 transition-colors">
            Get In Touch
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import ClientsSlider from '@/components/ClientsSlider.vue'

useHead({
  title: 'Our Clients - Nhlalala Corporate',
  meta: [
    {
      name: 'description',
      content: 'See our valued clients including government departments and private organizations across South Africa.'
    }
  ]
})

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el)
  })
})
</script>
