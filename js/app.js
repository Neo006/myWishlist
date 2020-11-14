export const app = {
    currentPage: 'products',
    // Initialize application
    init: function(){
        window.onhashchange = app.hashChange;

        if (window.location.hash) {
            app.currentPage = window.location.hash.replace('#' ,'');
        }
        history.replaceState({}, app.currentPage, `#${app.currentPage}`);
        app.hashChange();
    },
    // Change view on hash location change
    hashChange: function () {
        let hash = location.hash.replace('#' ,'');
        document.querySelector('.active').classList.remove('active');
        document.getElementById(hash).classList.add('active');
        document.querySelector(`.active_nav`).classList.remove('active_nav');
        document.querySelector(`[data-link='${hash}']`).classList.add('active_nav');
    }
}

document.addEventListener('DOMContentLoaded', app.init);
