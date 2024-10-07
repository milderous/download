document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const icon = document.createElement('i');
        icon.className = getIconClass(link.textContent); 
        icon.classList.add('nav-icon'); 
        link.innerHTML = ''; 
        link.appendChild(icon); 
    });
});
