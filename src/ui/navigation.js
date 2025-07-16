export function createNavigationBar() {
  const navElement = document.createElement('nav');

  const linksContainer = document.createElement('div');
  linksContainer.classList.add('nav-links');

  const homeLink = document.createElement('a');
  homeLink.href = '#home';
  homeLink.textContent = '🏠 Home';
  const historyLink = document.createElement('a');
  historyLink.href = '#history';
  historyLink.textContent = '🕘 History';
  const settingsLink = document.createElement('a');
  settingsLink.href = '#settings';
  settingsLink.textContent = '⚙️ Settings';
  const aboutLink = document.createElement('a');
  aboutLink.id = 'about';
  aboutLink.href = '#about';
  aboutLink.textContent = 'ℹ️ About';

  const privacyLink = document.createElement('a');
  privacyLink.id = 'privacy';
  privacyLink.href = '#privacy';
  privacyLink.textContent = '🔒 Privacy';

  const divHamburger = document.createElement('div');
  divHamburger.id = 'hamburger';
  divHamburger.classList.add('hamburger');
  const spanHamburger1 = document.createElement('span');
  const spanHamburger2 = document.createElement('span');
  const spanHamburger3 = document.createElement('span');

  divHamburger.appendChild(spanHamburger1);
  divHamburger.appendChild(spanHamburger2);
  divHamburger.appendChild(spanHamburger3);

  linksContainer.appendChild(homeLink);
  linksContainer.appendChild(historyLink);
  linksContainer.appendChild(settingsLink);
  linksContainer.appendChild(aboutLink);
  linksContainer.appendChild(privacyLink);

  divHamburger.addEventListener('click', () => {
    linksContainer.classList.toggle('show');
    divHamburger.style.display = "none";
   
  });
  const navLinks = linksContainer.querySelectorAll('a');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      linksContainer.classList.remove('show');
      divHamburger.style.display = "block";
    });
  });
  navElement.appendChild(linksContainer);
  navElement.appendChild(divHamburger);
  app.insertBefore(navElement, app.firstChild);
}
