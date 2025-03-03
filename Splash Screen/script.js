const splashScreen = document.getElementById('splash-screen');
const mainContent = document.getElementById('main-content');

splashScreen.style.display = 'flex';
mainContent.style.display = 'none';

splashScreen.addEventListener('mousemove', (e) => {
  const ripple = document.createElement('div');
  ripple.className = 'ripple';
  ripple.style.left = e.clientX + 'px';
  ripple.style.top = e.clientY + 'px';
  splashScreen.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 1000);
});

setTimeout(() => {
  splashScreen.style.opacity = '0';
  splashScreen.style.visibility = 'hidden';
  mainContent.style.display = 'block';
}, 4000);