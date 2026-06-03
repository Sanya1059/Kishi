// Логіка для управління станом сайту
function checkSiteStatus() {
  var isEnabled = config.isEnabled;
  var disabledMessage = config.disabledMessage || 'Отключено програмистом';
  
  var overlay = document.getElementById('disabled-overlay');
  var pageShell = document.querySelector('.page-shell');
  var disabledText = document.getElementById('disabled-text');
  
  if (isEnabled === false) {
    // Приховуємо основний контент
    if (pageShell) {
      pageShell.style.display = 'none';
    }
    
    // Показуємо overlay з повідомленням
    if (overlay && disabledText) {
      overlay.style.display = 'flex';
      disabledText.textContent = disabledMessage;
    }
  } else {
    // Сайт увімкнений - приховуємо overlay
    if (pageShell) {
      pageShell.style.display = 'block';
    }
    if (overlay) {
      overlay.style.display = 'none';
    }
  }
}

document.addEventListener('DOMContentLoaded', checkSiteStatus);
window.addEventListener('load', checkSiteStatus);
