// Логіка для управління станом сайту
function getSiteConfig() {
  var cfg = window.config || {};
  return {
    isEnabled: typeof cfg.isEnabled === 'boolean' ? cfg.isEnabled : true,
    disabledMessage: cfg.disabledMessage || 'Отключено программистом'
  };
}

function checkSiteStatus() {
  var config = getSiteConfig();
  var overlay = document.getElementById('disabled-overlay');
  var pageShell = document.querySelector('.page-shell');
  var disabledText = document.getElementById('disabled-text');

  if (config.isEnabled === false) {
    if (pageShell) {
      pageShell.style.display = 'none';
    }
    if (overlay && disabledText) {
      overlay.style.display = 'flex';
      disabledText.textContent = config.disabledMessage;
    }
  } else {
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
