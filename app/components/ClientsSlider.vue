<template>
  <div class="slider-container mb-16 fade-in">
    <div 
      class="slider-track" 
      :style="{ animationDuration: `${animationDuration}s` }"
    >
      <div 
        v-for="(client, index) in duplicatedClients" 
        :key="index" 
        class="slide"
      >
        <div class="client-logo bg-white p-4 rounded-lg h-32 w-48 flex items-center justify-center">
          <img 
            :src="`/images/${client.image}`" 
            :alt="client.name" 
            class="max-h-20 max-w-full object-contain"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const clients = [
  { name: 'CSIR', image: 'Picture10.jpg' },
  { name: 'PRASA', image: 'Picture16.png' },
  { name: 'Cherry Blue House', image: 'Picture17.jpg' },
  { name: 'NEIMISA', image: 'Picture15.png' },
  { name: 'Department of Defence', image: 'Picture21.png' },
  { name: 'City of Tshwane', image: 'Picture18.jpg' },
  { name: 'Department of Home Affairs', image: 'Picture14.png' },
  { name: 'Limpopo Education', image: 'Picture19.png' },
  { name: 'Basic Education', image: 'Picture11.jpg' },
  { name: 'SODESI Technologies', image: 'Picture20.jpg' },
  { name: 'Ditsong Museums', image: 'Picture13.jpg' }
]

// Duplicate clients for seamless looping
const duplicatedClients = [...clients, ...clients]

const animationDuration = clients.length * 3
</script>

<style scoped>
.slider-container {
  overflow: hidden;
  position: relative;
  width: 100%;
}

.slider-track {
  display: flex;
  animation: scroll infinite linear;
}

.slide {
  height: 160px;
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.client-logo {
  transition: all 0.3s ease;
  filter: grayscale(100%);
  opacity: 0.8;
  background-color: white !important; /* Force white background */
}

.client-logo:hover {
  filter: grayscale(0%);
  opacity: 1;
  transform: scale(1.05);
}

.slider-track:hover {
  animation-play-state: paused;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 11)); /* 11 is the number of clients */
  }
}
</style>