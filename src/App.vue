<template>
  <div class="wrapper container" v-if="getFullWeather">
    <Header />
    <Main />
  </div>
  <div class="loading" v-else>
    <div class="loading__element"></div>
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import { onMounted, computed } from 'vue'
import { useWeather } from '@/stores/weather'

const store = useWeather()
const getFullWeather = computed(() => store.weather)
const getDefaultCity = () => store.getWeather('Tashkent')

onMounted(() => {
  setTimeout(() => getDefaultCity(), 3000)
})

</script>