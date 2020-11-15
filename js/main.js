import App from './app.js';
import Products from '../views/products.js';
import Wishlist from '../views/wishlist.js';

const initialize = () => {
    let app = new App();

    fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(result => {
            let products = new Products(result);
            let wishlist = new Wishlist(result);
            document.querySelector(`[data-link='wishlist']`).addEventListener("click", () => {
                wishlist.renderWishlist(result);
            });
        })
        .catch(error => {
            console.error(error);
        });
}

initialize();