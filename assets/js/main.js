// ================================
// MUHAMMAD ZAIN-UL-ABDIN PORTFOLIO
// main.js — Complete JavaScript
// ================================

// -------- PRELOADER --------
window.addEventListener('load', function() {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    // Lock scroll
    document.body.style.overflow = 'hidden';
    
    // Hide preloader after 7.5 seconds
    setTimeout(function() {
      preloader.classList.add('fade-out');
      document.body.style.overflow = '';
      
      // Trigger scroll reveals after preloader is gone
      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach(el => {
          if (el.getBoundingClientRect().top < window.innerHeight) {
              el.classList.add('visible');
          }
      });
    }, 7500);
  }
});



// -------- CUSTOM CURSOR --------
const cursor     = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');

if (cursor && cursorRing) {
  let mouseX = 0, mouseY = 0;
  let ringX  = 0, ringY  = 0;

// Check if device supports hover (not touch)
const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

if (!isTouchDevice) {
  document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Cursor hover effect on interactive elements
  const hoverTargets = document.querySelectorAll('a, button, .project-card, .service-card, .skill-item, .stat, .contact-link, input, textarea');

  hoverTargets.forEach(function(el) {
    el.addEventListener('mouseenter', function() {
      cursor.classList.add('hover');
      cursorRing.classList.add('hover');
    });
    el.addEventListener('mouseleave', function() {
      cursor.classList.remove('hover');
      cursorRing.classList.remove('hover');
    });
  });

  function animateCursor() {
    cursor.style.left = mouseX - 6 + 'px';
    cursor.style.top  = mouseY - 6 + 'px';

    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;

    cursorRing.style.left = ringX - 18 + 'px';
    cursorRing.style.top  = ringY - 18 + 'px';

    requestAnimationFrame(animateCursor);
  }

  animateCursor();
}
}


// -------- PARTICLES --------
const particlesContainer = document.getElementById('particles');

function createParticles() {
  const count = window.innerWidth < 768 ? 12 : 25;

  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    // Random position and animation
    particle.style.left = Math.random() * 100 + '%';
    particle.style.width = (Math.random() * 3 + 1) + 'px';
    particle.style.height = particle.style.width;
    particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
    particle.style.animationDelay = (Math.random() * 10) + 's';
    particle.style.opacity = '0';

    particlesContainer.appendChild(particle);
  }
}

createParticles();


// -------- TYPING EFFECT --------
const typingElement = document.getElementById('typingText');
if (typingElement) {
const roles = [
  'Web Developer',
  'Python Programmer',
  'AI & ML Student',
  'Creative Problem Solver',
  'Data Science Enthusiast',
  'SMIT Faisalabad Student'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 80;

function typeEffect() {
  const currentRole = roles[roleIndex];

  if (isDeleting) {
    // Remove characters
    typingElement.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 40;
  } else {
    // Add characters
    typingElement.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 80;
  }

  // Done typing current word
  if (!isDeleting && charIndex === currentRole.length) {
    typingSpeed = 2000; // Pause at end
    isDeleting = true;
  }

  // Done deleting current word
  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    typingSpeed = 400; // Small pause before next word
  }

  setTimeout(typeEffect, typingSpeed);
}

  // Start typing after a delay
  setTimeout(typeEffect, 1500);
}


// -------- HAMBURGER MENU --------
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('navMenu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('open');
    document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
  });

  // Close menu when a link is clicked
  navMenu.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      hamburger.classList.remove('active');
      navMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}


// -------- NAVBAR SCROLL EFFECTS --------
const navbar = document.getElementById('navbar');
const scrollTopBtn = document.getElementById('scrollTopBtn');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', function() {
  const scrollY = window.scrollY;

  // Navbar background on scroll
  if (navbar) {
    if (scrollY > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  // Show/hide scroll-to-top button
  if (scrollTopBtn) {
    if (scrollY > 500) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  }

  // Active nav link based on scroll position
  if (sections.length > 0) {
    sections.forEach(function(section) {
      const sectionTop = section.offsetTop - 150;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        document.querySelectorAll('nav a').forEach(function(a) {
          a.classList.remove('active');
        });
        const activeLink = document.querySelector('nav a[href="#' + sectionId + '"]');
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  }
});


// -------- SCROLL TO TOP --------
if (scrollTopBtn) {
  scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


// -------- SCROLL REVEAL --------
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(function(el) {
  revealObserver.observe(el);
});


// -------- SKILL BAR ANIMATION --------
const skillItems = document.querySelectorAll('.skill-item');

const skillObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      // Animate all skill bars when grid appears
      const items = entry.target.querySelectorAll('.skill-item');
      items.forEach(function(item, index) {
        setTimeout(function() {
          item.classList.add('animated');
          const bar = item.querySelector('.skill-bar-fill');
          if (bar) {
            const targetWidth = bar.style.width;
            bar.style.width = '0%';
            setTimeout(function() {
              bar.style.width = targetWidth;
            }, 50);
          }
        }, index * 100);
      });
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

const skillsGrid = document.querySelector('.skills-grid');
if (skillsGrid) {
  skillObserver.observe(skillsGrid);
}


// -------- COUNTER ANIMATION --------
const counterElements = document.querySelectorAll('.stat-num[data-target]');

const counterObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      const el     = entry.target;
      const target = +el.dataset.target;
      let current  = 0;
      const step   = Math.max(target / 40, 0.1);

      const timer = setInterval(function() {
        current = Math.min(current + step, target);
        el.textContent = Math.round(current) + (target === 100 ? '%' : '+');

        if (current >= target) {
          clearInterval(timer);
        }
      }, 30);

      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

counterElements.forEach(function(el) {
  counterObserver.observe(el);
});


// -------- SMOOTH SCROLL (Navbar links) --------
document.querySelectorAll('a[href^="#"]').forEach(function(link) {
  link.addEventListener('click', function(e) {
    const targetId = link.getAttribute('href');
    if (targetId === '#') return;

    e.preventDefault();
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 60;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});


// -------- CONTACT FORM HANDLING --------
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Keeping preventDefault so we can use AJAX (fetch)

    const form = e.target;
    const submitBtn = document.getElementById('formSubmitBtn');
    const originalText = submitBtn.querySelector('.btn-text').textContent;
    const originalBg = submitBtn.style.background;

    // Change button state to "Sending..."
    submitBtn.querySelector('.btn-text').textContent = 'Sending...';
    submitBtn.disabled = true;

    // Send data using fetch (AJAX) to avoid page reload
    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        // Show success state
        submitBtn.querySelector('.btn-text').textContent = '✓ Message Sent!';
        submitBtn.style.background = '#2d8844';
        submitBtn.style.color = '#fff';
        
        // Reset form
        contactForm.reset();
        
        // Reset button after 4 seconds
        setTimeout(function() {
          submitBtn.querySelector('.btn-text').textContent = originalText;
          submitBtn.style.background = originalBg;
          submitBtn.style.color = '';
          submitBtn.disabled = false;
        }, 4000);
      } else {
        throw new Error('Form submission failed');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      submitBtn.querySelector('.btn-text').textContent = '❌ Try Again';
      submitBtn.style.background = '#9e2a2b';
      submitBtn.disabled = false;
      
      setTimeout(() => {
        submitBtn.querySelector('.btn-text').textContent = originalText;
        submitBtn.style.background = originalBg;
      }, 3000);
    });
  });
}


// -------- PAGE LOAD EFFECT --------
window.addEventListener('load', function() {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  
  requestAnimationFrame(function() {
    document.body.style.opacity = '1';
  });
});

