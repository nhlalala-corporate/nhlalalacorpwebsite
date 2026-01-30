<template>
  <div>
    <!-- Hero Section -->
    <section class="py-16 gradient-bg text-white">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
        <p class="text-xl opacity-90 max-w-3xl mx-auto">
          Learn about our journey, values, and the partners who trust us to deliver exceptional technology solutions.
        </p>
      </div>
    </section>

    <!-- About Content Section -->
    <section class="py-16 bg-white dark:bg-dark-950 transition-colors duration-300">
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
                  <div class="text-sm">Established</div>
                  <div class="text-3xl font-bold">2009</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Vision & Mission Section -->
    <section class="py-16 bg-gray-50 dark:bg-dark-900 transition-colors duration-300">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12 fade-in">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Our Vision and Mission</h2>
          <div class="h-1 w-20 bg-primary-600 mx-auto mb-8"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="fade-in">
            <div class="bg-white dark:bg-dark-800 rounded-xl p-8 shadow-lg text-center">
              <div class="w-16 h-16 gradient-bg rounded-lg flex items-center justify-center text-white mx-auto mb-6">
                <EyeIcon class="w-8 h-8" />
              </div>
              <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">Our Vision</h3>
              <p class="text-gray-600 dark:text-gray-400">
                To be the leading technology solutions provider in Africa, driving digital transformation and innovation that empowers businesses and communities.
              </p>
            </div>
          </div>
          
          <div class="fade-in">
            <div class="bg-white dark:bg-dark-800 rounded-xl p-8 shadow-lg text-center">
              <div class="w-16 h-16 gradient-bg rounded-lg flex items-center justify-center text-white mx-auto mb-6">
                <FlagIcon class="w-8 h-8" />
              </div>
              <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">Our Mission</h3>
              <p class="text-gray-600 dark:text-gray-400">
                To deliver cutting-edge ICT solutions that address unique client needs, foster sustainable growth, and create lasting value through innovation, excellence, and partnership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Our Commitment Section -->
    <section class="py-16 bg-white dark:bg-dark-950 transition-colors duration-300">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12 fade-in">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Our Commitment</h2>
          <div class="h-1 w-20 bg-primary-600 mx-auto mb-8"></div>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We are committed to delivering exceptional value through innovative solutions, expert guidance, and a client-centric approach that drives sustainable success.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div class="bg-gray-50 dark:bg-dark-900 p-8 rounded-xl">
            <div class="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center text-white mx-auto mb-4">
              <UserGroupIcon class="w-6 h-6" />
            </div>
            <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-3">Client-Centric Approach</h3>
            <p class="text-gray-600 dark:text-gray-400">
              We prioritize your needs and goals, delivering tailored solutions that drive your business forward.
            </p>
          </div>
          
          <div class="bg-gray-50 dark:bg-dark-900 p-8 rounded-xl">
            <div class="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center text-white mx-auto mb-4">
              <LightBulbIcon class="w-6 h-6" />
            </div>
            <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-3">Innovation & Excellence</h3>
            <p class="text-gray-600 dark:text-gray-400">
              We leverage cutting-edge technologies to deliver solutions that set new standards for quality.
            </p>
          </div>
          
          <div class="bg-gray-50 dark:bg-dark-900 p-8 rounded-xl">
            <div class="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center text-white mx-auto mb-4">
              <HandRaisedIcon class="w-6 h-6" />
            </div>
            <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-3">Sustainable Impact</h3>
            <p class="text-gray-600 dark:text-gray-400">
              We're dedicated to creating positive change and contributing to Africa's digital transformation.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Purpose and Principles Section -->
    <div class="py-8">
      <PurposePrinciples />
    </div>
    
    <!-- Partners Section -->
    <section class="py-16 bg-gray-50 dark:bg-dark-900 transition-colors duration-300">
      <PartnersSection />
    </section>

    <!-- CTA Section -->
    <section class="py-16 gradient-bg text-white">
      <div class="container mx-auto px-4 text-center">
        <div class="max-w-3xl mx-auto fade-in">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p class="text-xl opacity-90 mb-8">
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
import PurposePrinciples from '@/components/AboutPage/PurposePrinciples.vue'
import PartnersSection from '@/components/AboutPage/PartnersSection.vue'
import ImageWithPlaceholder from '@/components/ImageWithPlaceholder.vue'
import { 
  EyeIcon, 
  FlagIcon, 
  UserGroupIcon, 
  LightBulbIcon, 
  HandRaisedIcon 
} from '@heroicons/vue/24/solid'

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