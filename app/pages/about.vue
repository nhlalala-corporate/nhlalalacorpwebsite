<template>
  <div>
    <!-- Hero Section -->
    <section class="py-20 gradient-bg text-white">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">About Nhlalala Corporate</h1>
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
              As a proudly South African company, Nhlalala Corporate remains dedicated to sustainable transformation, striving to make a positive and meaningful impact on society. We proudly hold a Broad-based Black Economic Empowerment (BBBEE) contributor status.
            </p>
            
            <div class="grid grid-cols-2 gap-6 mb-8">
              <div class="bg-gray-50 dark:bg-dark-900 p-6 rounded-lg text-center">
                <div class="text-3xl font-bold text-primary-600 mb-2">5+</div>
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
                <img 
                  src="/images/about-team.jpg" 
                  alt="Nhlalala Corporate Team" 
                  class="w-full h-auto"
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

    <!-- Mission & Vision Section -->
    <section class="py-20 bg-gray-50 dark:bg-dark-900 transition-colors duration-300">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div class="bg-white dark:bg-dark-800 p-8 rounded-2xl shadow-sm fade-in">
            <div class="w-14 h-14 gradient-bg rounded-lg flex items-center justify-center text-white mb-6">
              <i class="fas fa-bullseye text-2xl"></i>
            </div>
            <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">Our Mission</h3>
            <p class="text-gray-600 dark:text-gray-400">
              To empower African businesses with innovative technology solutions that drive growth, transformation, and sustainable success in the digital age.
            </p>
          </div>
          
          <div class="bg-white dark:bg-dark-800 p-8 rounded-2xl shadow-sm fade-in">
            <div class="w-14 h-14 gradient-bg rounded-lg flex items-center justify-center text-white mb-6">
              <i class="fas fa-eye text-2xl"></i>
            </div>
            <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">Our Vision</h3>
            <p class="text-gray-600 dark:text-gray-400">
              To be the leading technology partner for organizations across Africa, recognized for our innovation, excellence, and commitment to sustainable transformation.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Partners Section -->
    <section class="py-20 bg-white dark:bg-dark-950 transition-colors duration-300">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16 fade-in">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Our Partners</h2>
          <div class="h-1 w-20 bg-primary-600 mx-auto"></div>
          <p class="text-lg text-gray-600 dark:text-gray-400 mt-6 max-w-3xl mx-auto">
            Trusted by 20,000+ customers across the world
          </p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="bg-gray-50 dark:bg-dark-900 p-6 rounded-lg flex items-center justify-center h-32 fade-in">
            <span class="text-xl font-bold text-gray-700 dark:text-gray-300">Microsoft</span>
          </div>
          <div class="bg-gray-50 dark:bg-dark-900 p-6 rounded-lg flex items-center justify-center h-32 fade-in">
            <span class="text-xl font-bold text-gray-700 dark:text-gray-300">VMware</span>
          </div>
          <div class="bg-gray-50 dark:bg-dark-900 p-6 rounded-lg flex items-center justify-center h-32 fade-in">
            <span class="text-xl font-bold text-gray-700 dark:text-gray-300">Adobe</span>
          </div>
          <div class="bg-gray-50 dark:bg-dark-900 p-6 rounded-lg flex items-center justify-center h-32 fade-in">
            <span class="text-xl font-bold text-gray-700 dark:text-gray-300">McAfee</span>
          </div>
          <div class="bg-gray-50 dark:bg-dark-900 p-6 rounded-lg flex items-center justify-center h-32 fade-in">
            <span class="text-xl font-bold text-gray-700 dark:text-gray-300">DigiCert</span>
          </div>
          <div class="bg-gray-50 dark:bg-dark-900 p-6 rounded-lg flex items-center justify-center h-32 fade-in">
            <span class="text-xl font-bold text-gray-700 dark:text-gray-300">Bitdefender</span>
          </div>
          <div class="bg-gray-50 dark:bg-dark-900 p-6 rounded-lg flex items-center justify-center h-32 fade-in">
            <span class="text-xl font-bold text-gray-700 dark:text-gray-300">Lenovo</span>
          </div>
          <div class="bg-gray-50 dark:bg-dark-900 p-6 rounded-lg flex items-center justify-center h-32 fade-in">
            <span class="text-xl font-bold text-gray-700 dark:text-gray-300">S Software</span>
          </div>
        </div>
      </div>
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
useHead({
  title: 'About Us - Nhlalala Corporate',
  meta: [
    {
      name: 'description',
      content: 'Learn about Nhlalala Corporate, a premier technology services provider operating in Africa with a commitment to innovation and excellence.'
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
