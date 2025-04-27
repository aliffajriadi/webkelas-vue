<script setup>
import NavBar from "../components/NavBar.vue";
import { ref, onMounted } from "vue";

// Sample member data - replace with your actual member data
const members = ref([
  {
    id: 1,
    name: "Alif Fajriadi",
    role: "@alfjrd_", 
    description: "Hidup tak sependek penis laki-laki",
    imageUrl: "/alip1.jpeg",
    visible: false
  },
  {
    id: 2,
    name: "Dwiki",
    role: "@dwkyputra__",
    description: "Abang mulet, adek jadi kepelet",
    imageUrl: "/dwiki.jpeg",
    visible: false
  },
  {
    id: 3,
    name: "Zetta Amini",
    role: "@xenoviee",
    description: "Bekrjalah, hngga yg mhal terliht murah",
    imageUrl: "/zeta.jpeg",
    visible: false
  },
  {
    id: 4,
    name: "Putri Tiara",
    role: "@tyaaabyte",
    description: "Senyum terus, walau tugas numpuk",
    imageUrl: "/putri1.jpeg",
    visible: false
  },
  {
    id: 5,
    name: "Gisella",
    role: "@lluvv_icell",
    description: "Deadline motivasi terbaik",
    imageUrl: "/sela.jpeg",
    visible: false
  },
  {
    id: 6,
    name: "Rivaldo Francisco",
    role: "@riivaldoo9",
    description: "Ayok mokel lee",
    imageUrl: "/valdo.jpeg",
    visible: false
  },
  {
    id: 7,
    name: "Anisa Rahmawati",
    role: "@nneccaaaa_",
    description: "Gigih, rajin, dan selalu semangat!",
    imageUrl: "/anisa.jpeg",
    visible: false
  },
  {
    id: 8,
    name: "Bastian Herinko",
    role: "@bashl__",
    description: "Hallo dek, abang jago ngoding looh",
    imageUrl: "/bastian.jpg",
    visible: false
  },
  {
    id: 9,
    name: "Naufal afif",
    role: "@naufalkc_",
    description: "Info bilard lee",
    imageUrl: "/nopal.jpeg",
    visible: false
  },
  {
    id: 10,
    name: "Adrian Rizqullah",
    role: "@adrian.rizqullah12",
    description: "Minimal pake Macbook la bos",
    imageUrl: "/adrian.jpeg",
    visible: false
  },
  {
    id: 11,
    name: "Marwan",
    role: "@wan_zeroone",
    description: "HAA MACBOOK? Asus tuf laa bos",
    imageUrl: "/marwan.jpeg",
    visible: false
  },
  {
    id: 12,
    name: "Syahriandi sitanggang",
    role: "@syhryndi.stg",
    description: "Rasakan kekuatan bola bijiku",
    imageUrl: "/rian.jpeg",
    visible: false
  }
]);

const pageTitle = ref({
  visible: false
});

onMounted(() => {
  // Animate title first
  setTimeout(() => {
    pageTitle.value.visible = true;
    
    // Then animate cards with staggered delay
    members.value.forEach((member, index) => {
      setTimeout(() => {
        member.visible = true;
      }, 300 + (index * 150)); // Staggered delay for each card
    });
  }, 300);
});
</script>

<template>
  <NavBar />
  
  <div class="container mx-auto px-8 md:px-12 lg:px-18 py-10 pb-28">
    <h1 
      class="text-3xl font-bold text-center mb-8 transition-all duration-700"
      :class="pageTitle.visible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-10'"
    >Our Team Members <br> IF D Class</h1>
    
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <!-- Member Cards - Smaller Size with Animation -->
      <div 
        v-for="member in members" 
        :key="member.id" 
        class="bg-white rounded-md overflow-hidden shadow transition-all duration-500"
        :class="member.visible ? 'opacity-100 transform translate-y-0 hover:shadow-md' : 'opacity-0 transform translate-y-10'"
      >
        <!-- Member Image - With proper scaling -->
        <div class="h-40 overflow-hidden flex items-center justify-center bg-gray-100">
          <img 
            :src="member.imageUrl" 
            :alt="member.name" 
            class="w-full h-auto object-contain transition-transform duration-300 hover:scale-110"
          />
        </div>
        
        <!-- Member Info - Compact Padding -->
        <div class="p-3">
          <h3 class="text-base font-bold mb-0.5">{{ member.name }}</h3>
          <p class="text-xs text-gray-600 font-medium mb-1">{{ member.role }}</p>
          <p class="text-xs text-gray-700 line-clamp-2">"{{ member.description }}"</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Truncate description text after 2 lines */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Add smooth transitions for all animated elements */
.transition-all {
  transition-property: all;
}
</style>
