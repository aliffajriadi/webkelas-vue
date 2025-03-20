<script setup>
import NavBar from "../components/NavBar.vue";
import { ref } from "vue";

const isVisible = ref(false);


setTimeout(() => {
  isVisible.value = true;
}, 100);
</script>

<template>
  <NavBar />
  
  <section class="flex flex-col md:flex-row items-center justify-between h-screen p-6 max-w-6xl mx-auto">
    
    <div 
      class="w-full md:w-1/2 p-6 transition-all duration-700"
      :class="isVisible ? 'opacity-100' : 'opacity-0 translate-x-10'"
    >
      <h1 class="text-4xl font-bold mb-4 border-b-2 border-gray-800 pb-2 inline-block">
        About IF D Class
      </h1>
      
      <p class="text-lg mb-6 leading-relaxed text-gray-700">
        Hallo, kami dari Teknik informatika D Politeknik Negeri Batam. Kami sekelas nggak cuma jago ngoding, tapi juga kompak dalam segala situasi! 🔥 Dengan semangat kebersamaan, kami menjunjung tinggi solidaritas, saling support, dan selalu siap menghadapi tantangan dunia teknologi. Di sini, belajar bukan cuma soal teori, tapi juga eksplorasi, inovasi, dan tentunya, seru-seruan bareng! 🚀💻

#SolidBukanKalengKaleng 💪
      </p>
      
     
      
      <div class="mt-8">
        <a href="https://www.instagram.com/dforifclass/" class="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
          Instagram
      </a>
      </div>
    </div>
    
    <!-- Image Section -->
    <div 
      class="w-full md:w-1/2 p-6 transition-all duration-700 delay-300"
      :class="isVisible ? 'opacity-100' : 'opacity-0 translate-x-10'"
    >
      <div class="bg-gray-100 rounded-lg overflow-hidden shadow-xl relative h-80 md:h-96">
        <img src="/kelas.jpg" alt="IF D Class" class="w-full h-full object-cover shadow-2xl">
      </div>
      
      <div class="mt-4 text-center pb-24 md:pb-0 lg:pb-0">
        <p class="text-sm text-gray-500 italic">IF D Class 24 - Polibatam</p>
      </div>
    </div>
  </section>
</template>
