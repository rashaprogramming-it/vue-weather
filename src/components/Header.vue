<template>
  <div class="header">
    <nav class="header__nav">
      <a href="#" class="logo">
        <img src="@/assets/images/logo.svg" alt="">
        <span>vue weather</span>
      </a>
      <div class="header__nav-search">
        <!-- <img src="@/assets/images/gulp.svg" alt=""> -->
        <input 
          type="text" 
          class="header__nav-input" 
          placeholder="Выбрать город"
          v-model="getSearch"
          @keydown.enter="getWeatherInfo"
        >
      </div>
    </nav>
  </div>
</template>

<script setup>
import { useWeather } from '@/stores/weather'
import { computed } from 'vue'

const store = useWeather()
const getSearch = computed({
  get: () => store.search,
  set: (val) => store.search = val
})
const getWeatherInfo = () => store.getWeather(getSearch.value)
</script>       