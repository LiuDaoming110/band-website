function loadHeader() {
    fetch('header.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('header-container').innerHTML = html;
            highlightCurrentPage();
        })
        .catch(error => console.error('加载头部失败:', error));
}

function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav a');
    
    navLinks.forEach(link => {
        const page = link.getAttribute('data-page');
        if (currentPage === page + '.html' || 
            (currentPage === '' && page === 'index')) {
            link.style.color = '#007bff';
            link.style.fontWeight = 'bold';
        }
    });
}

document.addEventListener('DOMContentLoaded', loadHeader);