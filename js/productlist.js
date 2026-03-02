"use strict";

const productContainer = document.querySelector("main");

fetch("https://kea-alt-del.dk/t7/api/products?category=Footwear").then((res) =>
  res.json().then((data) => {
    showProducts(data);
  }),
);

function showProducts(dataArr) {
  console.log();
  productContainer.innerHTML = "";
  dataArr.forEach((product) => {
    productContainer.innerHTML += ` <article class="smallProduct discounted">
        <div class="sold_out_img_container">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}" />
          <p class="soldoutTxt grey">sold out</p>
        </div>
        <h3>${product.productdisplayname}</h3>
        <p class="subtle">${product.brandname} | ${product.usagetype}</p>
        <p class="price">DKK <span>${product.price}</span>,-</p>
        <div class="discount_element">
          <p>Now DKK <span> ${Math.round(product.price * (1 - product.discount / 100))}</span>,-</p>
          <p class="red"><span>${product.discount}</span>%</p>
        </div>
        <a href="product.html">Read More</a>
      </article>`;
  });
}
