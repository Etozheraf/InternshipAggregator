(function() {
    let startTime = performance.now();

    window.addEventListener('load', function() {
        let endTime = performance.now();
        let loadTime = (endTime - startTime).toFixed(2);
        let footer = document.querySelector('.footer');
        footer.insertAdjacentHTML('beforeend', `<div class=\"add-footer\">Время загрузки страницы: ${loadTime} мс</div>`);
    });

    const menuItems = document.querySelectorAll('.internship-category-list p');
    const currentPage = document.location.pathname.split('/').pop();
    menuItems.forEach(item => {
        const link = item.querySelector('a').getAttribute('href');
        if (link === currentPage) {
            item.classList.add('active-internship-category');
        }
    });
    
    menuItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            if (item.classList.contains('active-internship-category'))
                return
            item.querySelector('a').style.color = 'rgba(0, 0, 0, 1)'
        });
        item.addEventListener('mouseout', () => {
            if (item.classList.contains('active-internship-category'))
                return
            item.querySelector('a').style.color = 'rgba(0, 0, 0, 0.6)'
        });
    });
})();