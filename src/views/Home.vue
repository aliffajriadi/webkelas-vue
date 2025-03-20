<script setup>
import NavBar from "../components/NavBar.vue";
import { ref, onMounted } from "vue";

const titleVisible = ref(false);
const subtitleVisible = ref(false);
const letterElements = ref([]);

onMounted(() => {
  setTimeout(() => {
    titleVisible.value = true;
    
    setTimeout(() => {
      subtitleVisible.value = true;
    }, 800);
  }, 300);
});
</script>

<template>
  <NavBar />
  <section class="flex flex-col items-center justify-center h-screen overflow-hidden">
    
    <a 
      href="https://www.instagram.com/dforifclass/" 
      class="sm:text-5xl px-4 text-4xl text-center hover:underline relative z-10 transition-all duration-1000 ease-out"
      :class="titleVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-16'"
    >
      Welcome To IF D Class 24 Website
    </a>
    
    <!-- Subtitle with fade-in animation -->
    <p 
      class="mt-4 text-lg transition-all duration-700 ease-out relative"
      :class="subtitleVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'"
    >
      @dforifclass
    </p>
    
    <!-- Simple pulse animation -->
    <div 
      class="absolute w-64 h-64 rounded-full bg-gray-100 opacity-10 animate-pulse-slow"
      :class="titleVisible ? 'scale-100' : 'scale-0'"
    ></div>
  </section>
</template>

<style scoped>
@keyframes pulse-slow {
  0%, 100% {
    transform: scale(1);
    opacity: 0.1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.2;
  }
}

.animate-pulse-slow {
  animation: pulse-slow 4s infinite ease-in-out;
}

/* Smooth transition for all elements */
.transition-all {
  transition-property: all;
}
</style>