export default class Products {
    constructor(data) {
        this.data = data;
        if(window.localStorage.length) {
            this.wishlist = JSON.parse(window.localStorage.getItem('wishlist'));
        } else {
            this.wishlist = [];
        }
        this.productList = document.getElementById('products_grid');
        this.previous = document.querySelector(".previous");
        this.next = document.querySelector(".next");
        this.page = 0;
        this.itemCount = 10;
        this.renderProducts();
    }

    // Rendering products
    renderProducts() {
        this.splitProducts(this.data, this.page, this.itemCount);
        this.nextPage();
        this.prevPage();
    }

    // Split products for paginate and create product elements
    splitProducts(data, page, itemCount) {
        for (let i = page; i < page + itemCount; i++) {
                let col = document.createElement("div");
                col.classList.add("col");
                let card = document.createElement("div");
                card.classList.add("card");
                let img = document.createElement("img");
                img.src = data[i].image;
                img.alt = "product-img";
                let cardBody = document.createElement("div");
                cardBody.classList.add("card-body");
                let cardPrice = document.createElement("h4");
                cardPrice.innerHTML = `Price - ${data[i].price}`;
                let cardTitle = document.createElement("p");
                cardTitle.innerText = data[i].title.split(" ", 2);
                let cardButton = document.createElement("button");
                cardButton.classList.add("button");
                cardButton.classList.add("wishlist-button");
                cardButton.onclick = () => {
                    this.addWishlist(cardButton, data[i].id);
                };
                this.wishlistButtonHtml(cardButton, data[i].id);

                card.appendChild(img);
                cardBody.appendChild(cardPrice);
                cardBody.appendChild(cardTitle);
                cardBody.appendChild(cardButton);
                card.appendChild(cardBody);
                col.appendChild(card);

                document.getElementById('products_grid').appendChild(col);
        }
    }

    // Next page event
    nextPage() {
        this.next.addEventListener("click", () => {
            this.page == this.data.length - this.itemCount ? (this.page = 0) : (this.page += this.itemCount);
            this.productList.innerHTML = "";
            this.splitProducts(this.data, this.page, this.itemCount);
        });
    }

    // Previous page event
    prevPage() {
        this.previous.addEventListener("click", () => {
            this.page == 0 ? (this.page = this.data.length - this.itemCount) : (this.page -= this.itemCount);
            this.productList.innerHTML = "";
            this.splitProducts(this.data, this.page, this.itemCount);
        });
    }

    // Add to wishlist event
    addWishlist(cardButton, id) {
        if (this.wishlist.includes(id)) {
            this.wishlist = this.wishlist.filter(e => e !== id);
            window.localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
            cardButton.innerHTML = "add to wishlist <span>&#10084;</span>";
        } else {
            this.wishlist.push(id);
            window.localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
            cardButton.innerHTML = "add to wishlist <span style='color: #d9ac30'>&#10084;</span>";
        }
    }

    // Add button inner Html
    wishlistButtonHtml(cardButton, id) {
        cardButton.innerHTML = "add to wishlist <span>&#10084;</span>";
        if (this.wishlist) {
            for (let j = 0; j < this.wishlist.length; j++) {
                if (this.wishlist[j] == id) {
                    cardButton.innerHTML = "add to wishlist <span style='color: #d9ac30'>&#10084;</span>";
                }
            }
        }
    }
}