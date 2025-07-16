import { createNavigationBar } from '../ui/navigation.js';
import { createFooter } from '../ui/footer.js';
import { createPrivacyContent } from '../ui/privacy.js';

export function showAPrivacyPage() {
  createPrivacyContent();
  createNavigationBar();
  createFooter();
}