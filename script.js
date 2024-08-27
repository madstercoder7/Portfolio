window.addEventListener('load', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    const mainContent = document.querySelector('.main-content');

    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            mainContent.style.display = 'block';
            document.body.style.overflow = 'auto';
        }, 500);
    }, 2000);
});