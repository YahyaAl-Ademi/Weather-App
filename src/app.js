import { startRouter} from '../src/router/router.js';
import { listenToUrlChanges} from '../src/router/router.js';

export function main() {
  startRouter();
  listenToUrlChanges();
}

window.addEventListener("load", main);
