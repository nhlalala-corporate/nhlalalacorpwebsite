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


    <!-- Focus Sectors Section -->
    <section class="py-20 bg-white dark:bg-dark-950 transition-colors duration-300">
      <FocusSectors :focusSectors="focusSectors" />
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
import FocusSectors from '@/components/ServicesPage/FocusSectors.vue'
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
    description: 'With our wealth of industry expertise, we offer strategic consulting services to help businesses navigate the complexities of the digital landscape and unlock new opportunities for growth.',
    details: 'Our consulting services include business process analysis, technology strategy development, digital transformation planning, and implementation guidance.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Cybersecurity',
    description: 'In recognizing the importance of safeguarding digital assets, we provide comprehensive cybersecurity services to protect against evolving threats and vulnerabilities.',
    details: 'Our cybersecurity solutions include risk assessment, security architecture design, penetration testing, incident response, and security awareness training.'
  },
  {
    icon: CodeBracketIcon,
    title: 'Software Development',
    description: 'Through leveraging agile methodologies and best-in-class technologies, we develop custom software solutions that streamline operations and enhance efficiency.',
    details: 'We specialize in full-stack development, API development, cloud-native applications, legacy system modernization, and custom software solutions tailored to your business needs.'
  },
  {
    icon: GlobeAltIcon,
    title: 'Website Development',
    description: 'With WordPress web development and graphics design services, we deliver tailored solutions that merge creativity with functionality to elevate online presence and brand identity.',
    details: 'Our web services include custom website development, WordPress solutions, e-commerce platforms, responsive design, and ongoing maintenance and support.'
  },
  {
    icon: CircleStackIcon,
    title: 'Data Management',
    description: 'By harnessing the power of data, we offer advanced analytics solutions that enable businesses to derive actionable insights and make informed decisions.',
    details: 'Our data services include data warehousing, business intelligence, data visualization, big data analytics, and data governance solutions.'
  },
  {
    icon: ServerIcon,
    title: 'Infrastructure Solutions',
    description: 'From network architecture to cloud services, we design and implement robust infrastructure solutions that form the backbone of modern enterprises.',
    details: 'We provide cloud migration services, infrastructure as a service (IaaS), platform as a service (PaaS), network design and implementation, and infrastructure management.'
  }
]

const focusSectors = [
  { name: 'Government', icon: 'fas fa-landmark' },
  { name: 'Telco', icon: 'fas fa-broadcast-tower' },
  { name: 'Finance', icon: 'fas fa-coins' },
  { name: 'Insurance', icon: 'fas fa-shield-alt' },
  { name: 'Transportation', icon: 'fas fa-truck' },
  { name: 'Agriculture', icon: 'fas fa-tractor' },
  { name: 'Manufacturing', icon: 'fas fa-industry' },
  { name: 'Mining', icon: 'fas fa-gem' }
]

useHead({
  title: 'Our Services - Nhlalala Corporate',
  meta: [
    {
      name: 'description',
      content: 'Discover our comprehensive ICT services including consulting, cybersecurity, software development, website development, data management, and infrastructure solutions.'
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
