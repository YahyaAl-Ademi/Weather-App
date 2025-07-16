const app = document.getElementById('app');

export let cityInput, getWeatherBtn, weatherResult;

export function createUI() {
  // Create title and input/button elements
  const container = document.createElement('div');
  container.id = 'content';
  const title = document.createElement('h1');
  title.textContent = 'Weather App';

  cityInput = document.createElement('input');
  cityInput.type = 'text';
  cityInput.id = 'cityInput';
  cityInput.placeholder = 'Enter city name';

  getWeatherBtn = document.createElement('button');
  getWeatherBtn.id = 'getWeatherBtn';
  getWeatherBtn.textContent = 'Get Weather';

  weatherResult = document.createElement('div');
  weatherResult.id = 'weatherResult';

  // Add elements to the page
  container.appendChild(title);
  container.appendChild(cityInput);
  container.appendChild(getWeatherBtn);
  container.appendChild(weatherResult);
  app.appendChild(container);
}
