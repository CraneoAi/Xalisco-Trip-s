document.addEventListener('DOMContentLoaded', () => {
  // Toggle mobile menu
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    document.body.classList.toggle('menu-open');
    
    // Transform hamburger to X
    const spans = menuToggle.querySelectorAll('span');
    spans.forEach(span => span.classList.toggle('active'));
    
    if (navLinks.classList.contains('active')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  });
  
  // Close menu when clicking a link
  const navItems = document.querySelectorAll('.nav-links a');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navLinks.classList.remove('active');
      
      const spans = menuToggle.querySelectorAll('span');
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    });
  });
  
  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Scroll to top button
  const scrollTopBtn = document.getElementById('scroll-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });
  
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Theme toggle
  const themeToggle = document.getElementById('theme-switch');
  const storedTheme = localStorage.getItem('theme') || 'dark';
  
  // Set initial theme
  if (storedTheme === 'light') {
    document.body.setAttribute('data-theme', 'light');
    themeToggle.checked = true;
  }
  
  themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
      document.body.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.removeAttribute('data-theme');
      localStorage.setItem('theme', 'dark');
    }
  });
  
  // Intersection Observer for section animations
  const sections = document.querySelectorAll('.location-section');
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
  };
  
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        sectionObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  sections.forEach(section => {
    sectionObserver.observe(section);
  });
  
  // Preload background images for performance
  const preloadImages = () => {
    const images = [
      'https://i.imgur.com/1ZQZ1Zy.png',
      'https://i.imgur.com/MRbehmO.jpg'
    ];
    
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  };
  
  preloadImages();
});