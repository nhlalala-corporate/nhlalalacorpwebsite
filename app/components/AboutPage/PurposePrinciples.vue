<template>
  <section class="py-20 bg-white dark:bg-dark-950 transition-colors duration-300">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16 fade-in">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Our Purpose and Principles</h2>
        <div class="h-1 w-20 bg-primary-600 mx-auto"></div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div class="fade-in">          
          <div class="space-y-8">
            <div class="flex items-start">
              <div class="w-12 h-12 gradient-bg rounded-full flex items-center justify-center text-white font-bold mr-6 flex-shrink-0">01</div>
              <div>
                <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">Our purpose</h3>
                <p class="text-gray-600 dark:text-gray-400">To pioneer technology services across Africa, driving digital transformation and empowering businesses with innovative solutions, exceptional services, and sustainable growth.</p>
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
</template>

<script setup>
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
