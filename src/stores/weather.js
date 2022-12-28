import { defineStore } from 'pinia'
import axios from 'axios'

export const useWeather = defineStore({
  id: 'weather',
  state: () => ({
    apiKey: '92ca66b24c787e6d5f6f7a0fb5752bad',
    weather: null
  }),
  actions: {
    async getWeather(city) {
      try {
        const res = await axios.get(
          `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${this.apiKey}`
        )

        let { lat, lon, name } = res.data[0]

        const res2 = await axios.get(
          `https://api.openweathermap.org/data/2.8/onecall?lat=${lat}&lon=${lon}&exclude=hourly,alerts,minutely&appid=${this.apiKey}&units=metric&lang=ru`
        )

        let weatherInfo = {...res2.data, name: city}
        this.weather = weatherInfo
      } catch (error) {
        console.log('Ошибка при получении данных!', error);
      }
    }
  },
  getters: {

  }
})
