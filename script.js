const themeToggleMoon = document.getElementById('moon');
const themeToggleSun = document.getElementById('sun');
const body = document.body;

themeToggleMoon.addEventListener('click', function() {
    body.classList.add('dark-theme');
    themeToggleMoon.style.display = 'none';
    themeToggleSun.style.display = 'inline';
});

themeToggleSun.addEventListener('click', function() {
    body.classList.remove('dark-theme');
    themeToggleMoon.style.display = 'inline';
    themeToggleSun.style.display = 'none';
});
