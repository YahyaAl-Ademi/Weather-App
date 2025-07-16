import { showHomePage } from '../pages/homePage.js';
import { showHistoryPage } from '../pages/historyPage.js';
import { showSettingsPage } from '../pages/settingsPage.js';
import { showAboutPage } from '../pages/aboutPage.js';
import { showAPrivacyPage } from '../pages/privacyPage.js';

export function listenToUrlChanges() {
  //  Router logic
  const route = window.location.hash || '#home';
  app.innerHTML = '';

  switch (route) {
    case '#home':
      showHomePage();
      break;
    case '#history':
      showHistoryPage();
      break;
    case '#settings':
      showSettingsPage();
      break;
    case '#about':
      showAboutPage();
      break;
      case '#privacy':
      showAPrivacyPage();
      break;
    default:
      app.innerHTML = '<h2>404 - Page not found</h2>';
  }
}

export function startRouter() {
  window.addEventListener('hashchange', listenToUrlChanges);
}
