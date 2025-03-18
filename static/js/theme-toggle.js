const currentTheme = localStorage.getItem('theme') || 'light';

// if (currentTheme === 'dark') {
//     document.body.classList.add('dark-mode');
//     themeToggleButton.innerHTML = "☀️";
// } else {
//     themeToggleButton.innerHTML = "🌙";
// }

document.addEventListener("DOMContentLoaded", function() {
    const themeToggleButton = document.getElementById('theme-toggle');

    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggleButton.innerHTML = "☀️";
    } else {
        themeToggleButton.innerHTML = "🌙";
    }

    themeToggleButton.addEventListener('click', function() {
        if (document.body.classList.contains('dark-mode')) {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
            themeToggleButton.innerHTML = "🌙";
        } else {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
            themeToggleButton.innerHTML = "☀️";
        }
    });
});