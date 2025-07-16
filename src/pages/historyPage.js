import { createNavigationBar } from '../ui/navigation.js';
import { createFooter } from '../ui/footer.js';
import { showResult } from '../storage/localStorage.js';

export function showHistoryPage() {
  showResult();
  createNavigationBar();
  createFooter();
}