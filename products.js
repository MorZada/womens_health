
// Extract the value from the query parameter
const urlParams = new URLSearchParams(window.location.search);
const scriptValue = urlParams.get('script');

// Dynamically load the JavaScript file based on the value
function loadScript(scriptValue) {
  const scriptElement = document.createElement('script');

  // Set the source of the script based on the value
  if (scriptValue === 'period_underwear') {
    scriptElement.src = 'period_underwear.js';
  } else if (scriptValue === 'pumps') {
    scriptElement.src = 'pumps.js';
  } else if (scriptValue === 'apps') {
    scriptElement.src = 'apps.js';
  }

  // Append the script element to the HTML body
  document.body.appendChild(scriptElement);
}

// Call the function to load the script based on the value
loadScript(scriptValue);
