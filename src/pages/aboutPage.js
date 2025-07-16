import { createNavigationBar } from '../ui/navigation.js';
import { createFooter } from '../ui/footer.js';
import { createAboutParagraph } from '../ui/createAboutParagraph.js';

export function showAboutPage() {
  createAboutParagraph();
  createNavigationBar();
  createFooter();
}