export default class Wishlist {
    constructor(data) {
        this.data =  data;
        this.totalCount = 0;
        this.totalPrice = 0;
        this.renderWishlist(this.data);
    }

    // Rendering wishlist items
    renderWishlist(data) {
        document.querySelector(".wishlist-table").innerHTML = "";
        let wishlist = JSON.parse(window.localStorage.getItem('wishlist'));
        // calculate wishlist items total count
        this.totalCount = wishlist.length;
        this.renderTotalCount();
        this.totalPrice = 0;

        this.addTableHead();
        for (let i = 0; i < wishlist.length; i++) {
            for (let j = 0; j < this.data.length; j++) {
                if (wishlist[i] == data[j].id) {
                    let tr = document.createElement("tr");
                    let tdImg = document.createElement("td");
                    let img = document.createElement("img");
                    img.src = data[j].image;
                    img.alt = "product-img";
                    let name = document.createElement("td");
                    name.innerText = data[j].title.split(" ", 2);
                    let price = document.createElement("td");
                    price.innerHTML = data[j].price;
                    // calculate wishlist items total price
                    this.totalPrice = (this.totalPrice + data[j].price);

                    tdImg.appendChild(img);
                    tr.appendChild(tdImg);
                    tr.appendChild(name);
                    tr.appendChild(price);

                    document.querySelector(".wishlist-table").appendChild(tr);
                }
            }
        }
        this.renderTotalPrice();
    }

    // Add table head th
    addTableHead() {
        let trHead = document.createElement("tr");
        let thImg = document.createElement("th");
        thImg.innerText = "Image";
        let thName = document.createElement("th");
        thName.innerText = "Name";
        let thPrice = document.createElement("th");
        thPrice.innerText = "Price";

        trHead.appendChild(thImg);
        trHead.appendChild(thName);
        trHead.appendChild(thPrice);

        document.querySelector(".wishlist-table").appendChild(trHead);
    }

    // Items total count
    renderTotalCount() {
        document.querySelector(".total-count").innerHTML = `Total Count - ${this.totalCount}`;
    }

    // Items total price
    renderTotalPrice() {
        document.querySelector(".total-price").innerHTML = `Total Price - ${this.totalPrice.toFixed(2)}`;
    }
}