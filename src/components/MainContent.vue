<template>
  <div class="main__content">
    <div class="main__content-left">
      <p class="main__content-left-degree">{{ Math.round(getFullWeather.current.temp) }}°</p>
      <p class="main__content-left-day">Сегодня</p>
      <p class="main__content-left-city">Город: {{ getFullWeather.name }}</p>
      <div class="main__content-left-img">
        <img :src="`/src/assets/images/${getImg}.svg`" alt="">
      </div>
    </div>
    <div class="main__content-right">
      <img src="@/assets/images/headerBg.svg" alt="" class="bg">
      <div class="main__content-right-item">
        <div class="main__content-right-icon">
          <img src="@/assets/images/temp.svg" alt="">
        </div>
        <span>Температура</span>
        <span>{{ Math.round(getFullWeather.current.temp) }}° - ощущается как {{ Math.round(getFullWeather.current.feels_like) }}°</span>
      </div>
      <div class="main__content-right-item">
        <div class="main__content-right-icon">
          <img src="@/assets/images/davlenie.svg" alt="">
        </div>
        <span>Давление</span>
        <span>{{ getFullWeather.current.pressure }} мм ртутного столба - нормальное</span>
      </div>
      <div class="main__content-right-item">
        <div class="main__content-right-icon">
          <img src="@/assets/images/osadki.svg" alt="">
        </div>
        <span>Облачность</span>
        <span>{{ getFullWeather.current.clouds }}</span>
      </div>
      <div class="main__content-right-item">
        <div class="main__content-right-icon">
          <img src="@/assets/images/wind.svg" alt="">
        </div>
        <span>Ветер</span>
        <span>{{ getFullWeather.current.wind_speed }} м/с юго-запад - легкий ветер</span>
      </div>
    </div>
  </div>
  <div class="main__content-day">
    <div class="day" v-for="(el, idx) in getAllDays">
      <h3>{{ getDay(idx, el.dt) }}</h3>
      <div class="date">
        <span>{{ unix(el.dt, 'day') }}</span>
        <span>{{ unix(el.dt, 'month') }}</span>
      </div>
      <img :src="`/src/assets/images/${getImgDay(el.weather[0].description)}.svg`" alt="" class="day-img">
      <h3>{{  Math.round(el.temp.day) }}°</h3>
      <span>{{ Math.round(el.feels_like.day) }}°</span>
      <span>{{ el.weather[0].description }}</span>
    </div>
  </div>
</template>

<script setup>
import { useWeather } from '@/stores/weather'
import { computed } from 'vue'
import  unix  from '../timestamp'
const store = useWeather()

const getFullWeather = computed(() => store.weather)
const getAllDays = computed(() => (store.weather.daily).slice(0, -1))
const desc = computed(() => store.weather.current.weather[0].description)

const getDay = (day, _day) => {
  if (day == 0) {
    return 'Сегодня'
  } else if (day == 1) {
    return 'Завтра'
  } else {
    return unix(_day, '_day')
  }
} 

const getImgDay = (arg) => {
  if (arg == 'дымка') {
    return 'minicloud'
  } else if (arg == 'пасмурно') {
    return 'minirain'
  } else if (arg == 'ясно') {
    return 'sun'
  } else if (arg == 'небольшая облачность') {
    return 'cloud'
  } else if (arg == 'облачно с прояснениями' || arg == 'переменная облачность') {
    return 'sunrain'
  } else if (arg == 'небольшой дождь') {
    return 'minirain'
  } else if (arg == 'дождь') {
    return 'rain'
  } else {
    return ''
  }
}

const getImg = computed(() => {
  let weather = {
    'дымка' : 'minicloud',
    'пасмурно' : 'minirain',
    'ясно' : 'sun',
    'небольшая облачность' : 'cloud',
    'облачно с прояснениями' : 'sunrain',
    'небольшой дождь' : 'minirain',
    'переменная облачность' : 'sunrain'
  }

  return weather[desc.value]
})

</script>