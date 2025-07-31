import { getWeatherBtn } from '../ui/weatherScreen.js';
import { saveInHistory } from '../storage/localStorage.js';
import { renderWeather } from '../view/renderWeather.js';



export async function fetchWeather(city) {
  const url = `http://127.0.0.1:3000/api/weather?city=${city}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`City not found (${response.status})`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function fetchCountryFlag(contryCode) {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha/${contryCode}`
    );
    if (!response.ok) {
      throw new Error(`Country not found:${response.status}`);
    }
    const data = await response.json();
    console.log(data[0].flags.png);
    return data[0].flags.png;
  } catch (error) {
    console.error('Error fetching country flag:', error);
    return null;
  }
}

export function setupEvents() {
  // When button clicked, get weather info
  getWeatherBtn.addEventListener('click', async () => {
    const city = cityInput.value.trim();
    if (!city) {
      weatherResult.textContent = `Enter the city name`;
      cityInput.value = '';
      return; // stop if no city entered
    }
    // Show loading spinner
    weatherResult.innerHTML = '<div class="loading-circle"></div>';
    // await new Promise((resolve) => setTimeout(resolve, 250));

    try {
      const data = await fetchWeather(city); // get weather from API
      saveInHistory(city);
      renderWeather(data);
      cityInput.value = '';
    } catch (error) {
      weatherResult.innerHTML = `<h3 style = "color: #b22222">Oops! Try again..</h3>`;
      console.log(error.message);
    }
  });
  cityInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      getWeatherBtn.click();
    }
  });
}
