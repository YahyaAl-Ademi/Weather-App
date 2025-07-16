export function createAboutParagraph() {
  app.textContent = '';
  let contentDiv = document.getElementById('content');
  if (!contentDiv) {
    contentDiv = document.createElement('div');
    contentDiv.id = 'content';
    app.appendChild(contentDiv);
  }
  const pageTitle = document.createElement('h2');
  pageTitle.textContent = 'About the App';
  const aboutText = document.createElement('p');
  aboutText.classList.add('page');
  aboutText.textContent = `A simple weather application built with plain JavaScript.  
  Get current weather information for any city by using the OpenWeatherMap API.`;
  contentDiv.appendChild(pageTitle);
  contentDiv.appendChild(aboutText);
  app.appendChild(contentDiv);
}
