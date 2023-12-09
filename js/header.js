document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu');
    const navList = document.querySelector('.nav ul');

    menuIcon.addEventListener('click', function() {
        navList.classList.toggle('show');
    });
});

