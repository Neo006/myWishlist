const renderProducts = () => {
    let div = document.createElement("DIV");
    div.innerHTML = "Render products";
    document.getElementById('products').appendChild(div);
}

renderProducts();

export default renderProducts;