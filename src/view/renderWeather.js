import { getWeatherEmoji } from '../helper/helper.js';
import { convertUnixToTime } from '../helper/helper.js';
import { getLocalTime } from '../helper/helper.js';
import { getLocalDate } from '../helper/helper.js'; 
import { getWindDirection } from '../helper/helper.js';
import { fetchCountryFlag } from '../api/apiFetchAndEvent.js';

export async function renderWeather(data) {
  // Show weather data on page
  const selected = localStorage.getItem('tempUnit') || 'celsius';
  const tempC = data.main.temp - 273.15;
  const feelsLikeC = data.main.feels_like - 273.15;
  let temperature = selected === 'celsius' ? tempC : (tempC * 9) / 5 + 32;
  let feelsLike =
    selected === 'celsius' ? feelsLikeC : (feelsLikeC * 9) / 5 + 32;

  temperature = Math.round(temperature);
  feelsLike = Math.round(feelsLike);
  const weather = data.weather[0].description;
  const emoji = getWeatherEmoji(weather);
  const icon = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  const humidity = data.main.humidity;
  const windSpeed = data.wind.speed;
  const directionOfWind = data.wind.deg;
  const windDirection = getWindDirection(directionOfWind);
  const pressure = data.main.pressure;
  const sunRise = convertUnixToTime(data.sys.sunrise, data.timezone);
  const sunSet = convertUnixToTime(data.sys.sunset, data.timezone);
  const localTime = getLocalTime(data.timezone);
  const localDate = getLocalDate(data.timezone);
  const countryCode = data.sys.country;
  const flagUrl = await fetchCountryFlag(countryCode);
  


  weatherResult.innerHTML = `
      <h2>${data.name}</h2>
      <p>🌡 Temperature: ${temperature} ${selected === 'celsius' ? '°C' : '°F'}</p>
  <p class="feels-like">🌡 Feels Like: ${feelsLike} ${
    selected === 'celsius' ? '°C' : '°F'
  }</p>
      <p>${emoji} Condition: ${weather}</p>
      <img src="${iconUrl}" alt="${weather} icon"  />
      <p>💧 Humidity: ${humidity}%</p>
      <p>🌬 Wind: ${windSpeed}m/s</p>
       <p>🧭 Wind Direction: ${directionOfWind}° (${windDirection})</p>
       <p>🔽 Pressure: ${pressure} hPa</p>
       <p>🌅 Sunrise: ${sunRise}</p>
       <p>🌇 Sunset: ${sunSet}</p>
      <p>📅 Date: ${localDate} ${localTime}</p>
      <p>🏳️ Country Code: ${countryCode}</p>
      <img src="${flagUrl}" alt="${countryCode}" class="flag-url" />
    `;
}
