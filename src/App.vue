<script setup>
import { onMounted } from "vue";
import Loading from "./components/Loading.vue";

onMounted(() => {
  // Delay meteor creation slightly to ensure DOM is ready
  setTimeout(createMeteors, 100);
});

function createMeteors() {
  const container = document.querySelector('.meteor-container');
  if (!container) return;

  // Clear any existing meteors first
  container.innerHTML = '';

  // Create multiple meteors
  for (let i = 0; i < 20; i++) {
    createSingleMeteor(container);
  }

  // Add new meteors periodically to maintain the effect
  setInterval(() => {
    if (document.body.contains(container)) {
      createSingleMeteor(container);
    }
  }, 2000);
}

function createSingleMeteor(container) {
  const meteor = document.createElement('div');
  meteor.classList.add('meteor');

  // Randomize starting position across the entire screen width
  const startPosX = Math.random() * 100; // Between 0-100% of screen width
  const startPosY = Math.random() * 100; // Between 0-100% of screen height

  // Randomize size and duration
  const size = Math.random() * 2 + 1;
  const duration = Math.random() * 5 + 3;

  // Apply styles
  meteor.style.setProperty('--startX', `${startPosX}%`);
  meteor.style.setProperty('--startY', `${startPosY}%`);
  meteor.style.setProperty('--size', `${size}px`);
  meteor.style.setProperty('--duration', `${duration}s`);

  container.appendChild(meteor);

  // Remove meteor after animation completes
  setTimeout(() => {
    if (meteor.parentNode === container) {
      container.removeChild(meteor);
    }
  }, duration * 1000);
}
</script>

<template>
  <div class="meteor-container"></div>
  <Loading>
    <router-view></router-view>
  </Loading>

</template>
<style>
.meteor-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
}

.meteor {
  position: absolute;
  top: var(--startY, 20%);
  left: var(--startX, 20%);
  width: var(--size, 1px);
  height: calc(var(--size, 1px) * 15);
  background-color: rgba(0, 0, 0, 0.3);
  transform: rotate(45deg);
  animation: meteorFall var(--duration, 4s) linear forwards;
}

@keyframes meteorFall {
  0% {
    transform: translateY(0) translateX(0) rotate(45deg);
    opacity: 1;
  }

  85% {
    opacity: 1;
  }

  100% {
    transform: translateY(50vh) translateX(50vh) rotate(45deg);
    opacity: 0;
  }
}

h1 {
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}
</style>
