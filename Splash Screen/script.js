const splashScreen = document.getElementById('splash-screen');
const mainContent = document.getElementById('main-content');

// Show splash screen immediately
splashScreen.style.display = 'flex';
mainContent.style.display = 'none';

// Create ripple effect on mouse move
splashScreen.addEventListener('mousemove', (e) => {
  const ripple = document.createElement('div');
  ripple.className = 'ripple';
  ripple.style.left = e.clientX + 'px';
  ripple.style.top = e.clientY + 'px';
  splashScreen.appendChild(ripple);

  // Remove ripple after animation
  setTimeout(() => {
    ripple.remove();
  }, 1000);
});

// Hide splash screen after 4 seconds
setTimeout(() => {
  splashScreen.style.opacity = '0';
  splashScreen.style.visibility = 'hidden';
  mainContent.style.display = 'block';
}, 4000);