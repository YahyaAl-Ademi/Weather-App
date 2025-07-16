
import { createUI } from '../ui/weatherScreen.js';
import { setupEvents } from '../api/apiFetchAndEvent.js';
import { createNavigationBar } from '../ui/navigation.js';
import { createFooter } from '../ui/footer.js';

export function showHomePage() {
  createUI();
  setupEvents();
  createNavigationBar();
  createFooter();
}