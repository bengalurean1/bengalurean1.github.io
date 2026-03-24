// ── Apply saved theme on load ──
(function () {
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light');
    document.getElementById('toggleIcon').textContent  = '🌙';
    document.getElementById('toggleLabel').textContent = 'Dark';
  }
})();

// ── Toggle between dark and light ──
function toggleTheme() {
  var isLight = document.body.classList.toggle('light');
  document.getElementById('toggleIcon').textContent  = isLight ? '🌙' : '☀️';
  document.getElementById('toggleLabel').textContent = isLight ? 'Dark' : 'Light';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
}

// ── Animate skill bars on load ──
window.addEventListener('load', function () {
  var bars = document.querySelectorAll('.bar-fill');
  setTimeout(function () {
    bars.forEach(function (bar) {
      bar.style.width = bar.getAttribute('data-width') + '%';
    });
  }, 400);
});
