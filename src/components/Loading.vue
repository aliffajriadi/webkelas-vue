<script setup>
import { ref, onMounted } from "vue";

const loading = ref(true);
const dots = ref([]);
const progress = ref(0);

onMounted(() => {
  // Initialize dots
  dots.value = Array(3).fill().map(() => ({
    scale: 0,
    opacity: 0
  }));
  
  // Animate dots in sequence
  animateDots();
  
  // Simulate loading progress
  const progressInterval = setInterval(() => {
    progress.value += Math.random() * 15;
    if (progress.value >= 100) {
      progress.value = 100;
      clearInterval(progressInterval);
      
      // Hide loading after slight delay
      setTimeout(() => {
        loading.value = false;
      }, 500);
    }
  }, 300);
});

function animateDots() {
  const animateDot = (index) => {
    setTimeout(() => {
      dots.value[index].scale = 1;
      dots.value[index].opacity = 1;
      
      setTimeout(() => {
        dots.value[index].scale = 0;
        dots.value[index].opacity = 0;
        
        // Restart animation if still loading
        if (loading.value) {
          setTimeout(() => {
            if (loading.value) animateDot(index);
          }, 300);
        }
      }, 600);
    }, index * 200);
  };
  
  // Start animation for each dot
  dots.value.forEach((_, index) => animateDot(index));
}
</script>

<template>
  <div v-if="loading" class="loading-overlay">
    <div class="loading-container">
      <h2 class="loading-text">IF D Class 24</h2>
      <div class="loading-dots">
        <div 
          v-for="(dot, index) in dots" 
          :key="index" 
          class="loading-dot"
          :style="{
            transform: `scale(${dot.scale})`,
            opacity: dot.opacity
          }"
        ></div>
      </div>
      <div class="progress-container">
        <div class="progress-bar" :style="{ width: `${progress}%` }"></div>
      </div>
      <p class="progress-text">{{ Math.floor(progress) }}%</p>
    </div>
    
    <!-- Pass through the router view once loading is complete -->
    <slot v-if="!loading"></slot>
  </div>
  <slot v-else></slot>
</template>

<style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loading-container {
  text-align: center;
}

.loading-text {
  font-size: 24px;
  font-weight: 600;
  color: #000000;
  margin-bottom: 20px;
  letter-spacing: 2px;
}

.loading-dots {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 30px;
}

.loading-dot {
  width: 12px;
  height: 12px;
  background-color: #000000;
  border-radius: 50%;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.progress-container {
  width: 200px;
  height: 4px;
  background-color: #f0f0f0;
  border-radius: 2px;
  overflow: hidden;
  margin: 0 auto;
}

.progress-bar {
  height: 100%;
  background-color: #000000;
  transition: width 0.3s ease;
}

.progress-text {
  margin-top: 10px;
  font-size: 14px;
  color: #333333;
}
</style>