
  export function createPrivacyContent() {
    app.textContent = '';
    let contentDiv = document.getElementById('content');
    if (!contentDiv) {
      contentDiv = document.createElement('div');
      contentDiv.id = 'content';
      app.appendChild(contentDiv);
    }
    const privacyTitle = document.createElement('h2');
    privacyTitle.textContent = 'Privacy Policy';
    const privacyText = document.createElement('p');
    privacyText.classList.add('page');
    privacyText.textContent = `This weather app does not collect, store, or share any personal data.  
    All weather data is fetched from OpenWeatherMap API based on the city name you enter. Nothing is stored or tracked.`;
    contentDiv.appendChild(privacyTitle );
    contentDiv.appendChild(privacyText);
    app.appendChild(contentDiv);
  }