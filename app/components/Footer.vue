<template>
  <footer class="bg-gray-800 dark:bg-dark-950 text-white py-12 transition-colors duration-300">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <!-- Company Info -->
        <div>
          <NuxtLink to="/" class="flex items-center mb-6">
            <img 
              src="/images/logo.png" 
              alt="Nhlalala Corporate" 
              class="h-10 w-auto"
            />
          </NuxtLink>
          <p class="text-gray-400 mb-6">
            Premier technology services provider operating in Africa, offering comprehensive solutions across the entire spectrum of ICT.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="social-link">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="social-link">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="social-link">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="#" class="social-link">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        
        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-3">
            <li>
              <NuxtLink 
                to="/" 
                class="text-gray-400 hover:text-white transition-colors"
                :class="{ 'text-white': $route.path === '/' }"
              >
                Home
              </NuxtLink>
            </li>
            <li>
              <NuxtLink 
                to="/about" 
                class="text-gray-400 hover:text-white transition-colors"
                :class="{ 'text-white': $route.path === '/about' }"
              >
                About
              </NuxtLink>
            </li>
            <li>
              <NuxtLink 
                to="/services" 
                class="text-gray-400 hover:text-white transition-colors"
                :class="{ 'text-white': $route.path === '/services' }"
              >
                Services
              </NuxtLink>
            </li>
            <li>
              <NuxtLink 
                to="/clients" 
                class="text-gray-400 hover:text-white transition-colors"
                :class="{ 'text-white': $route.path === '/clients' }"
              >
                Clients
              </NuxtLink>
            </li>
            <li>
              <NuxtLink 
                to="/contact" 
                class="text-gray-400 hover:text-white transition-colors"
                :class="{ 'text-white': $route.path === '/contact' }"
              >
                Contact
              </NuxtLink>
            </li>
          </ul>
        </div>
        
        <!-- Services -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Services</h3>
          <ul class="space-y-3">
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Consulting</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Cybersecurity</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Software Development</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Website Development</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Data Analytics</a></li>
          </ul>
        </div>
        
        <!-- Contact Info -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Contact Info</h3>
          <ul class="space-y-4">
            <li class="flex items-start">
              <MapPinIcon class="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
              <span class="text-gray-400">4 Uniden, 192 Garden Drive, Meyerspark, Pretoria</span>
            </li>
            <li class="flex items-start">
              <EnvelopeIcon class="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
              <span class="text-gray-400">info@nhlalalacorp.co.za</span>
            </li>
            <li class="flex items-start">
              <PhoneIcon class="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
              <span class="text-gray-400">+27 72 622 3537</span>
            </li>
            <li class="flex items-start">
              <ClockIcon class="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
              <span class="text-gray-400">Mon - Fri: 8:00 AM - 4:30 PM</span>
            </li>
          </ul>
        </div>
      </div>
      
      <!-- Copyright -->
      <div class="border-t border-gray-700 pt-8 text-center text-gray-400">
        <p>&copy; {{ new Date().getFullYear() }} Nhlalala Corporate. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { MapPinIcon, EnvelopeIcon, PhoneIcon, ClockIcon } from '@heroicons/vue/24/outline'
</script>

<style scoped>
.social-link {
  @apply w-10 h-10 bg-gray-700 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors;
}

.router-link-active {
  @apply text-white;
}
</style>
