import { createNavigationBar } from '../ui/navigation.js';
import { createFooter } from '../ui/footer.js';
import { rememberUserPreference } from '../storage/localStorage.js';

export function showSettingsPage() {
  rememberUserPreference();
  createNavigationBar();
  createFooter();
}