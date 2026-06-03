// Логіка для управління станом сайту
window.config = window.config || config;

document.addEventListener('DOMContentLoaded', function() {
  const isEnabled = window.config?.isEnabled;
  const disabledMessage = window.config?.disabledMessage || 'Отключено програмистом';
  if (isEnabled === false) {
    // Приховуємо основний контент
    const pageShell = document.querySelector('.page-shell');
    if (pageShell) {
      pageShell.style.display = 'none';
    }
    
    // Показуємо overlay з повідомленням
    const overlay = document.getElementById('disabled-overlay');
    const disabledText = document.getElementById('disabled-text');
    
    if (overlay && disabledText) {
      overlay.style.display = 'flex';
      disabledText.textContent = disabledMessage;
    }
  }
});
