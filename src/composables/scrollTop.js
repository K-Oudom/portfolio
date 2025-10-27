const scroll = () => {
    const scrollTop = document.querySelector('.scroll-top');

    const toggleScrollTop = () => {
        if (scrollTop) {
            if (window.scrollY > 100) {
                scrollTop.classList.add('active');
            } else {
                scrollTop.classList.remove('active');
            }
        }
    };

    if (scrollTop) {
        scrollTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        });
    }

    // Listen for scroll event
    window.addEventListener('scroll', toggleScrollTop);

    return { toggleScrollTop };
};

export default scroll;
