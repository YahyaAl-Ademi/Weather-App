export function createFooter() {
  const footerE = document.createElement('footer');
  footerE.id = 'footer';
  const copyrightText = document.createElement('p');
  copyrightText.textContent = 'Weather App © 2025 | Developed by';
  const developerLink = document.createElement('a');
  developerLink.href = 'https://github.com/YahyaAl-Ademi';
  developerLink.target = '_blank';
  developerLink.textContent = ' Yahya Al-Ademi';
  copyrightText.appendChild(developerLink);
  footerE.appendChild(copyrightText);
  app.appendChild(footerE);
}
