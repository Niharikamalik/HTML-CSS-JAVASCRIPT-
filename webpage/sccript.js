document.addEventListener('DOMContentLoaded', function() {
    // Fetch and include common.html
    fetch('navbar.html')
        .then(response => response.text())
        .then(html => {
            document.body.innerHTML = html + document.body.innerHTML;
        });
});