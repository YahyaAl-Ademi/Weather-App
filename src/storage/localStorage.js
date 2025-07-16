import { createNavigationBar } from '../ui/navigation.js';
import { createFooter } from '../ui/footer.js';

export function saveInHistory(city) {
  // Save searched city in localStorage (no duplicates)
  let history = JSON.parse(localStorage.getItem('search')) || [];
  if (!history.includes(city)) {
    history.push(city);
  }
  localStorage.setItem('search', JSON.stringify(history));
}

export function showResult() {
  app.textContent = '';

  const title = document.createElement('h2');
  title.textContent = 'Search History';
  app.appendChild(title);

  let history = JSON.parse(localStorage.getItem('search')) || [];

  if (history.length === 0) {
    app.textContent = '';
    const noResult = document.createElement('h2');
    noResult.textContent = 'No search yet';
    app.appendChild(noResult);
    return;
  }

  let contentDiv = document.getElementById('content');
  if (!contentDiv) {
    contentDiv = document.createElement('div');
    contentDiv.id = 'content';
    app.appendChild(contentDiv);
  }
  contentDiv.textContent = ''; //Clear the content before adding.

  let label = document.createElement("label");
  label.textContent = ' Select a city from history: ';

  let select = document.createElement('select');
  select.id = "history-select";
  select.classList.add("select");

  history.forEach((city) => {
    let option = document.createElement('option');
    option.classList.add('option');
    option.value = city;
    option.textContent = city;
    select.appendChild(option);
  });

  function changeToHomeForShowingData() {
    const selectedCity = select.value;
    location.hash = '#home';
    setTimeout(() => {
      cityInput.value = selectedCity;
      getWeatherBtn.click();
    }, 200);
  }
let seletDiv = document.createElement("div")
seletDiv.id = "selet-div"
seletDiv.appendChild(label)
seletDiv.appendChild(select)


  select.addEventListener('change', changeToHomeForShowingData);
  const goBtn = document.createElement('button');
  goBtn.textContent = 'Go';
  goBtn.id = 'go-btn';
  goBtn.addEventListener('click', changeToHomeForShowingData);

  let clearBtn = document.createElement('button');
  clearBtn.id = 'clear-btn';
  clearBtn.textContent = 'Clear History';

  clearBtn.addEventListener('click', () => {
    localStorage.removeItem('search');
    showResult();
    createNavigationBar();
    createFooter();
  });
  contentDiv.appendChild(seletDiv);
  // contentDiv.appendChild(select);
  contentDiv.appendChild(goBtn);
  contentDiv.appendChild(clearBtn);
}

export function rememberUserPreference() {
  // Show settings page UI for temp unit
  app.innerHTML = `
    <div id = "content">
     <h2>Settings</h2>
    <div id = "label-content"><label for="tempUnitSelect">Select Temperature Unit:</label>
    <select id="tempUnitSelect" class="select">
      <option value="celsius" class= "option">°C (Celsius)</option>
      <option value="fahrenheit">°F (Fahrenheit)</option>
    </select>
    </div>
    </div>
   
  `;
  const select = document.getElementById('tempUnitSelect');
  select.value = localStorage.getItem('tempUnit') || 'celsius';
  select.addEventListener('change', () => {
    localStorage.setItem('tempUnit', select.value);
  });
}
