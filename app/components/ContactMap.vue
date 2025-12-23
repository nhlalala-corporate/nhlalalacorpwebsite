<template>
  <div class="h-64 md:h-96 w-full rounded-2xl overflow-hidden shadow-sm fade-in">
    <iframe
      src="https://maps.google.com/maps?q=4%20Uniden%2C%20192%20Garden%20Drive%2C%20Meyerspark%2C%20Pretoria&t=&z=17&ie=UTF8&iwloc=&output=embed"
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