<template>
  <div class="h-64 md:h-96 w-full rounded-2xl overflow-hidden shadow-sm fade-in">
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.287316410074!2d28.22925941502832!3d-26.059869983506887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e951a6e5d7c5d1f%3A0x1e3e3e3e3e3e3e3e!2s4%20Uniden%2C%20192%20Garden%20Drive%2C%20Meyerspark%2C%20Pretoria!5e0!3m2!1sen!2sza!4v1234567890!5m2!1sen!2sza"
      width="100%" 
      height="100%" 
      style="border:0;" 
      allowfullscreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade"
      class="rounded-2xl"
    ></iframe>
  </div>
</template>

<script setup>
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
</style>