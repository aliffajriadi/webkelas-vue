<template>
    <nav class="fixed bottom-0 left-0 right-0 flex justify-center p-4 mb-4 z-50">
      <div class="flex space-x-6 bg-white p-3 rounded-full shadow-md transition-all duration-300 hover:shadow-lg">
        <router-link to="/" custom v-slot="{ navigate, isActive }">
          <button
            @click="navigate"
            @mousedown="handleMouseDown"
            @mouseup="handleMouseUp"
            :class="[
              'nav-icon transition-all duration-300 p-2 rounded-full relative overflow-hidden',
              isActive ? 'text-black bg-gray-200' : 'text-gray-500 hover:text-black hover:bg-gray-100'
            ]"
          >
            <span class="hover-ripple absolute inset-0 bg-gray-200 opacity-0"></span>
            <span class="click-ripple absolute rounded-full bg-gray-300 transform scale-0 opacity-0"></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="relative z-10"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </button>
        </router-link>
        
        <router-link to="/about" custom v-slot="{ navigate, isActive }">
          <button
            @click="navigate"
            @mousedown="handleMouseDown"
            @mouseup="handleMouseUp"
            :class="[
              'nav-icon transition-all duration-300 p-2 rounded-full relative overflow-hidden',
              isActive ? 'text-black bg-gray-200' : 'text-gray-500 hover:text-black hover:bg-gray-100'
            ]"
          >
            <span class="hover-ripple absolute inset-0 bg-gray-200 opacity-0"></span>
            <span class="click-ripple absolute rounded-full bg-gray-300 transform scale-0 opacity-0"></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="relative z-10"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
          </button>
        </router-link>
        
        <router-link to="/member" custom v-slot="{ navigate, isActive }">
          <button
            @click="navigate"
            @mousedown="handleMouseDown"
            @mouseup="handleMouseUp"
            :class="[
              'nav-icon transition-all duration-300 p-2 rounded-full relative overflow-hidden',
              isActive ? 'text-black bg-gray-200' : 'text-gray-500 hover:text-black hover:bg-gray-100'
            ]"
          >
            <span class="hover-ripple absolute inset-0 bg-gray-200 opacity-0"></span>
            <span class="click-ripple absolute rounded-full bg-gray-300 transform scale-0 opacity-0"></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="relative z-10"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>
        </router-link>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { computed } from "vue";
  import { useRoute } from "vue-router";
  
  const route = useRoute();
  
  // Fungsi untuk menangani efek klik
  const handleMouseDown = (event) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    
    // Posisi klik relatif terhadap button
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    // Ambil elemen ripple
    const ripple = button.querySelector('.click-ripple');
    
    // Set posisi ripple dari titik klik
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    
    // Aktifkan animasi
    ripple.classList.remove('scale-0', 'opacity-0');
    ripple.classList.add('animate-ripple');
  };
  
  const handleMouseUp = (event) => {
    const button = event.currentTarget;
    const ripple = button.querySelector('.click-ripple');
    
    // Reset animasi
    setTimeout(() => {
      ripple.classList.remove('animate-ripple');
      ripple.classList.add('scale-0', 'opacity-0');
    }, 300);
  };
  </script>
  
  <style scoped>
  /* Animasi hover */
  .nav-icon:hover .hover-ripple {
    opacity: 0.2;
  }
  
  /* Animasi klik dengan ripple effect */
  @keyframes ripple {
    0% {
      transform: scale(0);
      opacity: 0.7;
    }
    100% {
      transform: scale(4);
      opacity: 0;
    }
  }
  
  .animate-ripple {
    animation: ripple 0.6s ease-out;
  }
  
  /* Animasi untuk ikon */
  .nav-icon svg {
    transition: transform 0.2s ease;
  }
  
  .nav-icon:hover svg {
    transform: scale(1.1);
  }
  
  .nav-icon:active svg {
    transform: scale(0.95);
  }
  
  /* Animasi untuk container navbar */
  nav {
    animation: slide-up 0.5s ease-out;
  }
  
  @keyframes slide-up {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  </style>