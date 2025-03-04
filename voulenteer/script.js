
importScripts('style.css');


// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Mobile menu toggle
const navbarToggle = document.getElementById('navbar-toggle');
const navbarMenu = document.getElementById('navbar-menu');

if (navbarToggle && navbarMenu) {
  navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
  });
}

// Star rating functionality
const stars = document.querySelectorAll('.star-rating i');
let currentRating = 0;

stars.forEach(star => {
  star.addEventListener('click', () => {
    const rating = parseInt(star.getAttribute('data-rating'));
    currentRating = rating;
    updateStars();
  });
  
  star.addEventListener('mouseover', () => {
    const rating = parseInt(star.getAttribute('data-rating'));
    highlightStars(rating);
  });
  
  star.addEventListener('mouseout', () => {
    highlightStars(currentRating);
  });
});

function updateStars() {
  stars.forEach(star => {
    const rating = parseInt(star.getAttribute('data-rating'));
    if (rating <= currentRating) {
      star.classList.remove('far');
      star.classList.add('fas');
    } else {
      star.classList.remove('fas');
      star.classList.add('far');
    }
  });
}

function highlightStars(rating) {
  stars.forEach(star => {
    const starRating = parseInt(star.getAttribute('data-rating'));
    if (starRating <= rating) {
      star.classList.remove('far');
      star.classList.add('fas');
    } else {
      star.classList.remove('fas');
      star.classList.add('far');
    }
  });
}

// Dropdown functionality
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');
const dropdownItems = document.querySelectorAll('.dropdown-item');

if (dropdownToggle && dropdownMenu) {
  // Show dropdown on click (alternative to hover)
  dropdownToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
  });
  
  // Hide dropdown when clicking elsewhere
  document.addEventListener('click', () => {
    dropdownMenu.style.display = 'none';
  });
  
  // Update selected option
  dropdownItems.forEach(item => {
    item.addEventListener('click', () => {
      dropdownToggle.querySelector('span').textContent = item.textContent;
      dropdownMenu.style.display = 'none';
    });
  });
}

// Get the button
const goTopBtn = document.getElementById('goTopBtn');

// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goTopBtn.style.display = 'block';
  } else {
    goTopBtn.style.display = 'none';
  }
};

// When the user clicks on the button, scroll to the top of the document
goTopBtn.addEventListener('click', function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});