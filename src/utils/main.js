// Main JavaScript for Deepak Vaid's Portfolio

document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme toggle
    initThemeToggle();
    
    // Add scroll event listener to handle navbar appearance
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Add animated particles for the quantum effect in the hero section
    animateParticles();
});

// Theme toggle functionality
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Apply the saved theme
    if (currentTheme === 'dark') {
        body.classList.add('dark-theme');
        themeIcon.className = 'fas fa-moon';
    } else {
        body.classList.remove('dark-theme');
        themeIcon.className = 'fas fa-sun';
    }
    
    // Theme toggle click handler
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-theme');
        
        // Update icon and save preference
        if (body.classList.contains('dark-theme')) {
            themeIcon.className = 'fas fa-moon';
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.className = 'fas fa-sun';
            localStorage.setItem('theme', 'light');
        }
        
        // Add a small animation to the icon
        themeIcon.style.transform = 'scale(0.8)';
        setTimeout(() => {
            themeIcon.style.transform = 'scale(1)';
        }, 150);
    });
}

// Function to animate quantum particles - now with tetrahedra
function animateParticles() {
    const physicsAnimation = document.querySelector('.physics-animation');
    
    // Add more particles dynamically
    for (let i = 0; i < 5; i++) {
        const particle = document.createElement('div');
        particle.classList.add('quantum-particle');
        
        // Randomize position and animation
        const size = Math.random() * 15 + 5; // Random size between 5-20px
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        particle.style.left = `${Math.random() * 80 + 10}%`;
        particle.style.top = `${Math.random() * 80 + 10}%`;
        
        // Assign random colors from our quantum colors
        const colors = ['#9B59B6', '#2ECC71', '#F39C12', '#3498DB', '#E74C3C'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.backgroundColor = randomColor;
        
        // Random animation duration and delay
        particle.style.animationDuration = `${Math.random() * 4 + 3}s`;
        particle.style.animationDelay = `${Math.random() * 2}s`;
        
        physicsAnimation.appendChild(particle);
}
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});
