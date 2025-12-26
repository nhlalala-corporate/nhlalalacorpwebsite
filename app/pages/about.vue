<template>
  <div>
    <!-- Hero Section -->
    <section class="py-20 gradient-bg text-white">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
        <p class="text-xl opacity-90 max-w-3xl mx-auto">
          Learn about our journey, values, and the partners who trust us to deliver exceptional technology solutions.
        </p>
      </div>
    </section>

    <!-- About Content Section -->
    <section class="py-20 bg-white dark:bg-dark-950 transition-colors duration-300">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- First Column: About Text -->
          <div class="fade-in">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">Our Story</h2>
            <div class="h-1 w-20 bg-primary-600 mb-8"></div>

            <p class="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Nhlalala Corporate stands as a premier technology services provider operating in Africa, offering comprehensive solutions across the entire spectrum of Information and Communication Technology (ICT), with a steadfast commitment to innovation and excellence.
            </p>
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Our seasoned team of experts harnesses the latest advancements in ICT to tailor-made solutions that address the unique needs of our clients.
            </p>
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Nhlalala Corporate is driven by a passion for excellence and a commitment to deliver unparalleled value to our clients. As a trusted partner, we empower businesses to embrace innovation, drive transformation, and achieve sustainable success in today's fast-paced world.
            </p>
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-8">
              As a proudly South African company, Nhlalala Corporate remains dedicated to sustainable transformation, striving to make a positive and meaningful impact on society. We proudly hold a Level 1 Broad-based Black Economic Empowerment (BBBEE) contributor status.
            </p>

            <div class="grid grid-cols-2 gap-6 mb-8">
              <div class="bg-gray-50 dark:bg-dark-900 p-6 rounded-lg text-center">
                <div class="text-3xl font-bold text-primary-600 mb-2">16+</div>
                <div class="text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div class="bg-gray-50 dark:bg-dark-900 p-6 rounded-lg text-center">
                <div class="text-3xl font-bold text-primary-600 mb-2">50+</div>
                <div class="text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
            </div>

            <div class="flex flex-wrap gap-4">
              <div class="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium">
                Innovation
              </div>
              <div class="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium">
                Excellence
              </div>
              <div class="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium">
                Transformation
              </div>
              <div class="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium">
                BBBEE Certified
              </div>
            </div>
          </div>

          <!-- Second Column: Image -->
          <div class="fade-in">
            <div class="relative">
              <div class="rounded-2xl overflow-hidden shadow-lg">
                <ImageWithPlaceholder
                  src="/images/about-team.webp"
                  alt="Nhlalala Corporate Team"
                  class="w-full h-auto"
                  placeholder="/images/placeholder.svg"
                />
              </div>
              <div class="absolute -bottom-6 -left-6 w-32 h-32 gradient-bg rounded-2xl flex items-center justify-center text-white shadow-lg">
                <div class="text-center">
                  <div class="text-3xl font-bold">2009</div>
                  <div class="text-sm">Established</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  <section class="py-20 bg-white dark:bg-dark-950 transition-colors duration-300">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16 fade-in">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Our Purpose and Principles</h2>
        <div class="h-1 w-20 bg-primary-600 mx-auto"></div>
      </div>
    </div>
  </section>
      
    <!-- Vision & Mission Section -->
    <section class="py-20 bg-gray-50 dark:bg-dark-900 transition-colors duration-300">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <VisionSection />
          <MissionSection />
        </div>
      </div>
    </section>

    <PurposePrinciples />

    <!-- Partners Section -->
    <section class="py-20 bg-gray-100 dark:bg-dark-800 transition-colors duration-300">
      <PartnersSection />
    </section>

    <!-- CTA Section -->
    <section class="py-20 gradient-bg text-white">
      <div class="container mx-auto px-4 text-center">
        <div class="max-w-3xl mx-auto fade-in">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p class="text-xl opacity-90 mb-10">
            Join our growing list of satisfied clients and experience the Nhlalala Corporate difference.
          </p>
          <NuxtLink to="/contact" class="px-8 py-3 bg-white text-primary-700 font-medium rounded-lg hover:bg-gray-100 transition-colors shadow-lg inline-block">
            Contact Us Today
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import VisionSection from '@/components/AboutPage/VisionSection.vue'
import MissionSection from '@/components/AboutPage/MissionSection.vue'
import PurposePrinciples from '@/components/AboutPage/PurposePrinciples.vue'
import PartnersSection from '@/components/AboutPage/PartnersSection.vue'
import ImageWithPlaceholder from '@/components/ImageWithPlaceholder.vue'
import { onMounted } from 'vue'

useHead({
  title: 'About Us - Nhlalala Corporate',
  meta: [
    {
      name: 'description',
      content: 'Learn about Nhlalala Corporate, a premier technology services provider operating in Africa with a commitment to innovation and excellence.'
    }
  ]
})

onMounted(async () => {
  // Wait for all components to be rendered and data to be loaded
  await new Promise(resolve => setTimeout(resolve, 100));

  // Set up Intersection Observer to handle fade-in effect for all sections
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, { threshold: 0.1 })

  // Observe all elements with fade-in class
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
