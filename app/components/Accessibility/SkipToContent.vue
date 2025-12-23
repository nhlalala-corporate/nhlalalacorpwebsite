<!-- app/components/Accessibility/SkipToContent.vue -->
<template>
  <div class="skip-nav">
    <NuxtLink to="#main-content" class="skip-link">
      Skip to main content
    </NuxtLink>
  </div>
</template>

<style scoped>
.skip-nav {
  position: absolute;
  top: -40px;
  left: 6px;
  z-index: 10000;
}

.skip-nav a.skip-link {
  color: white;
  background: #000;
  padding: 8px;
  text-decoration: none;
  border-radius: 4px;
}

.skip-nav a.skip-link:focus {
  top: 6px;
  left: 6px;
  position: fixed;
  z-index: 10000;
  background: #000;
  color: white;
  padding: 8px;
  text-decoration: none;
  border-radius: 4px;
}
</style>