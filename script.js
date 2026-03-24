// Apply saved theme on page load
  (function () {
    const saved = localStorage.getItem('theme');
    if (saved === 'light') {
      document.body.classList.add('light');
      document.getElementById('toggleIcon').textContent = '🌙';
      document.getElementById('toggleLabel').textContent = 'Dark';
    }
  })();

  function toggleTheme() {
    const isLight = document.body.classList.toggle('light');
    const icon  = document.getElementById('toggleIcon');
    const label = document.getElementById('toggleLabel');
    if (isLight) {
      icon.textContent  = '🌙';
      label.textContent = 'Dark';
      localStorage.setItem('theme', 'light');
    } else {
      icon.textContent  = '☀️';
      label.textContent = 'Light';
      localStorage.setItem('theme', 'dark');
    }
  }