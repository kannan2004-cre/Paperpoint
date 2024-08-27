document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('toggle-btn');
    const navContent = document.getElementById('nav-content');
    const sidebar = document.getElementById('sidebar');

 
    toggleBtn.addEventListener('click', function () {
        navContent.classList.toggle('show');
    });

    document.addEventListener('click', function (event) {
        if (!sidebar.contains(event.target) && !toggleBtn.contains(event.target)) {
            navContent.classList.remove('show');
        }
    });
});
