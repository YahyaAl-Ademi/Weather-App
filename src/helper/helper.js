export function getWeatherEmoji(description) {
  // Return emoji based on weather text
  const desc = description.toLowerCase();
  if (desc.includes('clear')) return '☀️';
  if (desc.includes('cloud')) return '🌤';
  if (desc.includes('rain')) return '🌧';
  if (desc.includes('snow')) return '❄️';
  if (desc.includes('storm')) return '⛈';
  return '🌡';
}

export function convertUnixToTime(timestamp, offset) {
  // Convert Unix time + offset to our time
  return new Date((timestamp + offset) * 1000).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function getLocalTime(offset) {
  // Get current local time of city
  const utcNow = Date.now() + new Date().getTimezoneOffset() * 60000;
  return new Date(utcNow + offset * 1000).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function getLocalDate(offset) {
  // Get current local date of city
  const utcNow = Date.now() + new Date().getTimezoneOffset() * 60000;
  return new Date(utcNow + offset * 1000).toLocaleDateString('en-GB');
}

export function getWindDirection(degree) {
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  const index = Math.floor((degree + 22.5) / 45) % 8;
  return directions[index];
}
