const themeToggleMoon = document.getElementById('moon');
const themeToggleSun = document.getElementById('sun');
const themeContainer = document.querySelector('.theme-container');

themeToggleMoon.addEventListener('click', function() {
    themeContainer.classList.add('dark-theme');
    themeToggleMoon.style.display = 'none';
    themeToggleSun.style.display = 'inline';
});

themeToggleSun.addEventListener('click', function() {
    themeContainer.classList.remove('dark-theme');
    themeToggleMoon.style.display = 'inline';
    themeToggleSun.style.display = 'none';
});
