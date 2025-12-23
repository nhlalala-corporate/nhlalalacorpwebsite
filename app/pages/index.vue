<template>
  <div>
    <Hero />
    
    <!-- Features Section -->
    <section class="py-20 bg-white dark:bg-dark-950 transition-colors duration-300">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16 fade-in">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Why Choose Nhlalala Corporate</h2>
          <div class="h-1 w-20 bg-primary-600 mx-auto"></div>
          <p class="text-lg text-gray-600 dark:text-gray-400 mt-6 max-w-3xl mx-auto">
            We deliver innovative technology solutions that drive growth and transformation for businesses across Africa.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-gray-50 dark:bg-dark-900 p-8 rounded-xl service-card transition-all duration-300 fade-in">
            <div class="w-14 h-14 gradient-bg rounded-lg flex items-center justify-center text-white mb-6">
              <i class="fas fa-lightbulb text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-4">Innovation Driven</h3>
            <p class="text-gray-600 dark:text-gray-400">We leverage cutting-edge technologies to create solutions that give you a competitive advantage.</p>
          </div>
          
          <div class="bg-gray-50 dark:bg-dark-900 p-8 rounded-xl service-card transition-all duration-300 fade-in">
            <div class="w-14 h-14 gradient-bg rounded-lg flex items-center justify-center text-white mb-6">
              <i class="fas fa-users text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-4">Client Focused</h3>
            <p class="text-gray-600 dark:text-gray-400">Your success is our priority. We work closely with you to understand your unique needs and challenges.</p>
          </div>
          
          <div class="bg-gray-50 dark:bg-dark-900 p-8 rounded-xl service-card transition-all duration-300 fade-in">
            <div class="w-14 h-14 gradient-bg rounded-lg flex items-center justify-center text-white mb-6">
              <i class="fas fa-shield-alt text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-4">Reliable & Secure</h3>
            <p class="text-gray-600 dark:text-gray-400">We build robust, secure solutions that you can depend on for your critical business operations.</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Stats Section -->
    <section class="py-20 gradient-bg text-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div class="fade-in">
            <div class="text-4xl md:text-5xl font-bold mb-2">50+</div>
            <div class="text-lg opacity-90">Projects Completed</div>
          </div>
          <div class="fade-in">
            <div class="text-4xl md:text-5xl font-bold mb-2">15+</div>
            <div class="text-lg opacity-90">Happy Clients</div>
          </div>
          <div class="fade-in">
            <div class="text-4xl md:text-5xl font-bold mb-2">5+</div>
            <div class="text-lg opacity-90">Years Experience</div>
          </div>
          <div class="fade-in">
            <div class="text-4xl md:text-5xl font-bold mb-2">12+</div>
            <div class="text-lg opacity-90">Experts Team</div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Testimonials Section -->
    <HomePageTestimonials />

    <!-- CTA Section -->
    <section class="py-20 bg-white dark:bg-dark-950 transition-colors duration-300">
      <div class="container mx-auto px-4 text-center">
        <div class="max-w-3xl mx-auto fade-in">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">Ready to Transform Your Business?</h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 mb-10">
            Let's discuss how our technology solutions can help you achieve your business goals and drive growth.
          </p>
          <NuxtLink to="/contact" class="px-8 py-3 gradient-bg text-white font-medium rounded-lg hover:opacity-90 transition-opacity shadow-lg inline-block">
            Start a Project
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Hero from '@/components/Hero.vue'
import HomePageTestimonials from '@/components/HomePage/Testimonials.vue'

useHead({
  title: 'Nhlalala Corporate - Technology Solutions',
  meta: [
    {
      name: 'description',
      content: 'Nhlalala Corporate stands as a premier technology services provider operating in Africa, offering comprehensive solutions across the entire spectrum of Information and Communication Technology (ICT).'
    },
    {
      property: 'og:title',
      content: 'Nhlalala Corporate - Technology Solutions'
    },
    {
      property: 'og:description',
      content: 'Nhlalala Corporate stands as a premier technology services provider operating in Africa, offering comprehensive solutions across the entire spectrum of Information and Communication Technology (ICT).'
    },
    {
      property: 'og:url',
      content: 'https://nhlalala-corporate.com'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'Nhlalala Corporate - Technology Solutions'
    },
    {
      name: 'twitter:description',
      content: 'Nhlalala Corporate stands as a premier technology services provider operating in Africa, offering comprehensive solutions across the entire spectrum of Information and Communication Technology (ICT).'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://nhlalala-corporate.com'
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