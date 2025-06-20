function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const hamburger = document.querySelector('.hamburger-menu');
    
    sidebar.classList.toggle('open');
    hamburger.classList.toggle('open');
}

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    const sidebar = document.getElementById('sidebar');
    const hamburger = document.querySelector('.hamburger-menu');
    
    if (!sidebar.contains(event.target) && !hamburger.contains(event.target)) {
        sidebar.classList.remove('open');
        hamburger.classList.remove('open');
    }
});

// Close menu on ESC key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        sidebar.classList.remove('open');
        hamburger.classList.remove('open');
    }
});