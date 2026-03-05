"use strict";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
console.log(id);

const productContainer = document.querySelector("#productContainer");
console.log(productContainer);

fetch(`https://kea-alt-del.dk/t7/api/products/${id}`).then((res) =>
  res.json().then((data) => {
    showProducts(data);
  }),
);

function showProducts(product) {
  productContainer.innerHTML = `
      <figure>
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}" class="productImage" />
          ${product.discount ? '<span class="saleLabel">Udsalg!</span>' : ""}
      </figure>
    
      <section class="productDetails">
        <h2 class="productName">${product.productdisplayname}</h2>
        <div>
          <p class="articleType"><span class="bold">Type:</span> ${product.articletype}</p>
          <p class="productCategory"><span class="bold">Kategori:</span> ${product.category}</p>
          <p class="productPrice"><span class="bold">Pris:</span> ${product.price},-</p>
          ${product.discount ? `<div class="discount_element"><p>Now DKK <span>${Math.round(product.price * (1 - product.discount / 100))}</span>,-</p><p class="red"><span>${product.discount}</span>%</p></div>` : ""}
          <p class="productColour"><span class="bold">Farve:</span> ${product.basecolour}</p>
          <p>${product.gender} | ${product.usagetype}</p>
          <p class="productDescription">${product.description}</p>
        </div>
        <button class="buyButton">Køb nu</button>
        </section>`;
}
