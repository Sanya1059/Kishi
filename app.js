// Логіка для управління станом сайту
document.addEventListener('DOMContentLoaded', function() {
  if (!config.isEnabled) {
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
      disabledText.textContent = config.disabledMessage;
    }
  }
});
