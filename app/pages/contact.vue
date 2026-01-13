<template>
  <div>
    <!-- Hero Section -->
    <section class="py-20 gradient-bg text-white">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
        <p class="text-xl opacity-90 max-w-3xl mx-auto">
          Ready to transform your business with our technology solutions? We're here to help.
        </p>
      </div>
    </section>

    <!-- Contact Content Section -->
    <section class="py-20 bg-white dark:bg-dark-950 transition-colors duration-300">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Information -->
          <div class="fade-in">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">Let's Start a Conversation</h2>
            <div class="h-1 w-20 bg-primary-600 mb-8"></div>
            
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-10">
              Have questions about our services or ready to start a project? Reach out to us and our team will get back to you as soon as possible.
            </p>
            
            <div class="space-y-8">
              <div class="flex items-start">
                <div class="w-14 h-14 gradient-bg rounded-lg flex items-center justify-center text-white mr-6 flex-shrink-0">
                  <MapPinIcon class="w-6 h-6" />
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">Address</h3>
                  <p class="text-gray-600 dark:text-gray-400">4 Uniden, 192 Garden Drive, Meyerspark, Pretoria</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="w-14 h-14 gradient-bg rounded-lg flex items-center justify-center text-white mr-6 flex-shrink-0">
                  <EnvelopeIcon class="w-6 h-6" />
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">Email</h3>
                  <p class="text-gray-600 dark:text-gray-400">info@nhlalalacorp.co.za</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="w-14 h-14 gradient-bg rounded-lg flex items-center justify-center text-white mr-6 flex-shrink-0">
                  <PhoneIcon class="w-6 h-6" />
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">Phone</h3>
                  <p class="text-gray-600 dark:text-gray-400">+27 72 622 5537</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="w-14 h-14 gradient-bg rounded-lg flex items-center justify-center text-white mr-6 flex-shrink-0">
                  <ClockIcon class="w-6 h-6" />
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">Business Hours</h3>
                  <p class="text-gray-600 dark:text-gray-400">Monday - Friday: 8:00 AM - 4:30 PM</p>
                </div>
              </div>
            </div>
            
            <!-- Social Media Links -->
            <div class="mt-12">
              <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-6">Follow Us</h3>
              <div class="flex space-x-4">
                <a href="#" class="w-12 h-12 bg-gray-100 dark:bg-dark-800 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-primary-600 hover:text-white transition-colors">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="w-12 h-12 bg-gray-100 dark:bg-dark-800 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-primary-600 hover:text-white transition-colors">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="w-12 h-12 bg-gray-100 dark:bg-dark-800 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-primary-600 hover:text-white transition-colors">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="#" class="w-12 h-12 bg-gray-100 dark:bg-dark-800 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-primary-600 hover:text-white transition-colors">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          
          <!-- Contact Form -->
          <div class="fade-in">
            <ContactForm />
          </div>
        </div>
        
        <!-- Map Section -->
        <div class="mt-20">
          <ContactMap />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { MapPinIcon, EnvelopeIcon, PhoneIcon, ClockIcon } from '@heroicons/vue/24/solid'
import ContactMap from '@/components/ContactMap.vue'
import ContactForm from '@/components/ContactPage/ContactForm.vue'

useHead({
  title: 'Contact Us - Nhlalala Corporate',
  meta: [
    {
      name: 'description',
      content: 'Get in touch with Nhlalala Corporate. Reach us at 4 Uniden, 192 Garden Drive, Meyerspark, Pretoria or call +27 72 622 5537.'
    },
    {
      property: 'og:title',
      content: 'Contact Us - Nhlalala Corporate'
    },
    {
      property: 'og:description',
      content: 'Get in touch with Nhlalala Corporate. Reach us at 4 Uniden, 192 Garden Drive, Meyerspark, Pretoria or call +27 72 622 5537.'
    },
    {
      property: 'og:url',
      content: `${process.env.SITE_URL || 'https://nhlalalacorp.co.za'}/contact`
    },
    {
      name: 'twitter:title',
      content: 'Contact Us - Nhlalala Corporate'
    },
    {
      name: 'twitter:description',
      content: 'Get in touch with Nhlalala Corporate. Reach us at 4 Uniden, 192 Garden Drive, Meyerspark, Pretoria or call +27 72 622 5537.'
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

<style scoped>
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

.gradient-bg {
  background: linear-gradient(135deg, #2f93ff 0%, #0f70f5 100%);
}
</style>
