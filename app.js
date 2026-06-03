// Логіка для управління станом сайту
function checkSiteStatus() {
  var cfg = window.config || {};
  var isEnabled = cfg.isEnabled;
  var disabledMessage = cfg.disabledMessage || 'Отключено програмістом';

  var overlay = document.getElementById('disabled-overlay');
  var pageShell = document.querySelector('.page-shell');
  var disabledText = document.getElementById('disabled-text');
  
  console.log('[site-control] checkSiteStatus invoked. config=', cfg);
  
  if (isEnabled === false) {
    document.body.classList.remove('site-enabled');
    document.body.classList.add('site-disabled');

    // Приховуємо основний контент
    if (pageShell) {
      pageShell.style.display = 'none';
    }
    
    // Показуємо overlay з повідомленням
    if (overlay && disabledText) {
      overlay.style.display = 'flex';
      disabledText.textContent = disabledMessage;
    }
    console.log('[site-control] site disabled — applied class and overlay');
  } else {
    document.body.classList.remove('site-disabled');
    document.body.classList.add('site-enabled');

    // Сайт увімкнений - приховуємо overlay
    if (pageShell) {
      pageShell.style.display = 'block';
    }
    if (overlay) {
      overlay.style.display = 'none';
    }
    console.log('[site-control] site enabled — removed class and overlay');
  }
}

document.addEventListener('DOMContentLoaded', checkSiteStatus);
window.addEventListener('load', checkSiteStatus);
