<template>
  <div>
    <!-- Hero Section -->
    <section class="py-20 gradient-bg text-white">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
        <p class="text-xl opacity-90 max-w-3xl mx-auto">
          Comprehensive technology solutions tailored to drive your business forward in the digital age.
        </p>
      </div>
    </section>

    <!-- Services Grid Section -->
    <section class="py-20 bg-white dark:bg-dark-950 transition-colors duration-300">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16 fade-in">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Our Expertise</h2>
          <div class="h-1 w-20 bg-primary-600 mx-auto"></div>
          <p class="text-lg text-gray-600 dark:text-gray-400 mt-6 max-w-3xl mx-auto">
            We offer end-to-end technology solutions designed to meet your unique business needs.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            v-for="(service, index) in services"
            :key="index"
            :service="service"
          />
        </div>
      </div>
    </section>

    <!-- Purpose and Principles Section -->
    <section class="py-20 bg-gray-50 dark:bg-dark-900 transition-colors duration-300">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16 fade-in">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Our Purpose and Principles</h2>
          <div class="h-1 w-20 bg-primary-600 mx-auto"></div>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div class="fade-in">
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Our purpose is to pioneer technology services across Africa, driving digital transformation and empowering businesses with innovative solutions, exceptional services, and sustainable growth.
            </p>
            
            <div class="space-y-8">
              <div class="flex items-start">
                <div class="w-12 h-12 gradient-bg rounded-full flex items-center justify-center text-white font-bold mr-6 flex-shrink-0">01</div>
                <div>
                  <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">Mission</h3>
                  <p class="text-gray-600 dark:text-gray-400">To provide our valued customers with peace of mind through innovation, service, quality, and ongoing enhancement.</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="w-12 h-12 gradient-bg rounded-full flex items-center justify-center text-white font-bold mr-6 flex-shrink-0">02</div>
                <div>
                  <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">Core Principles</h3>
                  <p class="text-gray-600 dark:text-gray-400">Our principles encompass Integrity, Dependability, Innovation, Competence, Leadership, and Accountability.</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="w-12 h-12 gradient-bg rounded-full flex items-center justify-center text-white font-bold mr-6 flex-shrink-0">03</div>
                <div>
                  <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">Quality</h3>
                  <p class="text-gray-600 dark:text-gray-400">We are committed to continuous improvement, embracing industry best practices, and standards to guarantee the utmost level of customer satisfaction.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="fade-in">
            <div class="bg-white dark:bg-dark-800 p-8 rounded-2xl shadow-lg h-full">
              <div class="w-16 h-16 gradient-bg rounded-full flex items-center justify-center text-white mb-6 mx-auto">
                <i class="fas fa-bullseye text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">Our Commitment</h3>
              <p class="text-gray-600 dark:text-gray-400 text-center">
                We are dedicated to delivering excellence in every project, ensuring that our solutions not only meet but exceed your expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Focus Sectors Section -->
    <section class="py-20 bg-white dark:bg-dark-950 transition-colors duration-300">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16 fade-in">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Our Focus Sectors</h2>
          <div class="h-1 w-20 bg-primary-600 mx-auto"></div>
          <p class="text-lg text-gray-600 dark:text-gray-400 mt-6 max-w-3xl mx-auto">
            We serve a diverse range of industries with tailored technology solutions.
          </p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div v-for="(sector, index) in focusSectors" :key="index" class="bg-gray-50 dark:bg-dark-900 p-6 rounded-xl text-center transition-all duration-300 hover:shadow-md fade-in">
            <div class="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center text-white mb-4 mx-auto">
              <i :class="`${sector.icon} text-xl`"></i>
            </div>
            <h3 class="font-semibold text-gray-800 dark:text-white">{{ sector.name }}</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 gradient-bg text-white">
      <div class="container mx-auto px-4 text-center">
        <div class="max-w-3xl mx-auto fade-in">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p class="text-xl opacity-90 mb-10">
            Let's discuss how our technology solutions can help you achieve your business goals.
          </p>
          <NuxtLink to="/contact" class="px-8 py-3 bg-white text-primary-700 font-medium rounded-lg hover:bg-gray-100 transition-colors shadow-lg inline-block">
            Get Started
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import ServiceCard from '@/components/ServiceCard.vue'
import {
  ChartBarIcon,
  ShieldCheckIcon,
  CodeBracketIcon,
  GlobeAltIcon,
  CircleStackIcon,
  ServerIcon
} from '@heroicons/vue/24/solid'

const services = [
  {
    icon: ChartBarIcon,
    title: 'Consulting Services',
    description: 'With our wealth of industry expertise, we offer strategic consulting services to help businesses navigate the complexities of the digital landscape and unlock new opportunities for growth.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Cybersecurity',
    description: 'In recognizing the importance of safeguarding digital assets, we provide comprehensive cybersecurity services to protect against evolving threats and vulnerabilities.'
  },
  {
    icon: CodeBracketIcon,
    title: 'Software Development',
    description: 'Through leveraging agile methodologies and best-in-class technologies, we develop custom software solutions that streamline operations and enhance efficiency.'
  },
  {
    icon: GlobeAltIcon,
    title: 'Website Development',
    description: 'With WordPress web development and graphics design services, we deliver tailored solutions that merge creativity with functionality to elevate online presence and brand identity.'
  },
  {
    icon: CircleStackIcon,
    title: 'Data Analytics',
    description: 'By harnessing the power of data, we offer advanced analytics solutions that enable businesses to derive actionable insights and make informed decisions.'
  },
  {
    icon: ServerIcon,
    title: 'Infrastructure Solutions',
    description: 'From network architecture to cloud services, we design and implement robust infrastructure solutions that form the backbone of modern enterprises.'
  }
]

const focusSectors = [
  { name: 'Government', icon: 'fas fa-landmark' },
  { name: 'Healthcare', icon: 'fas fa-hospital' },
  { name: 'Education', icon: 'fas fa-graduation-cap' },
  { name: 'Telco', icon: 'fas fa-broadcast-tower' },
  { name: 'Utilities', icon: 'fas fa-bolt' },
  { name: 'Retail', icon: 'fas fa-shopping-cart' },
  { name: 'Transportation', icon: 'fas fa-truck' },
  { name: 'Agriculture', icon: 'fas fa-tractor' },
  { name: 'Manufacturing', icon: 'fas fa-industry' },
  { name: 'Mining', icon: 'fas fa-mountain' }
]

useHead({
  title: 'Our Services - Nhlalala Corporate',
  meta: [
    {
      name: 'description',
      content: 'Discover our comprehensive ICT services including consulting, cybersecurity, software development, website development, data analytics, and infrastructure solutions.'
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