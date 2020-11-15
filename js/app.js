export default class App {
    constructor() {
        this.currentPage = 'products';
        this.init();
    }

    // Initialize application
    init() {
        window.onhashchange = this.hashChange;

        if (window.location.hash) {
            this.currentPage = window.location.hash.replace('#' ,'');
        }
        history.replaceState({}, this.currentPage, `#${this.currentPage}`);
        this.hashChange();
    }

    // Change view on hash location change
    hashChange() {
        let hash = location.hash.replace('#' ,'');
        document.querySelector('.active').classList.remove('active');
        document.getElementById(hash).classList.add('active');
        document.querySelector(`.active-nav`).classList.remove('active-nav');
        document.querySelector(`[data-link='${hash}']`).classList.add('active-nav');
    }
}
