<script setup>
import { ref, onMounted } from "vue";

// State untuk menyimpan data cuaca
const weather = ref(null);

// Fungsi untuk fetch data
const fetchWeather = async () => {
  try {
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=-6.2&longitude=106.8&current_weather=true"
    );
    const data = await response.json();
    weather.value = data.current_weather; // Simpan ke state
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};

// Panggil fetchWeather saat komponen dimuat
onMounted(fetchWeather);
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen text-center">
    <h1 class="text-2xl font-bold">Cuaca Sekarang</h1>
    <div v-if="weather">
      <p class="text-lg">Suhu: {{ weather.temperature }}°C</p>
      <p class="text-lg">Kecepatan Angin: {{ weather.windspeed }} km/h</p>
    </div>
    <p v-else class="text-gray-500">Mengambil data cuaca...</p>
  </div>
</template>
