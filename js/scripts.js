function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');

    sidebar.classList.toggle('expanded');
    content.classList.toggle('expanded');
}

document.addEventListener("DOMContentLoaded", function() {
    var dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(function(dropdown) {
        var button = dropdown.querySelector('.dropbtn');

        button.addEventListener('click', function() {
            dropdown.classList.toggle('active');
        });
    });
});