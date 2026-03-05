("use strict");
const params = new URLSearchParams(window.location.search);
const category = params.get("category");
console.log(category);

const productContainer = document.querySelector("main");

fetch(`https://kea-alt-del.dk/t7/api/products?category=${category}&limit=40`).then((res) =>
  res.json().then((data) => {
    showProducts(data);
  }),
);

function showProducts(dataArr) {
  console.log();
  productContainer.innerHTML = `<h2>${category}</h2>`;
  dataArr.forEach((product) => {
    // if (product.soldout) {
    //   console.log("product status: Udsolgt");
    // } else {
    //   console.log("product status: På lager");
    // }
    // product.soldout ? console.log("product status: Udsolgt") : console.log("product status: På lager");
    productContainer.innerHTML += ` 
      <article class="smallProduct ${product.discount ? "discounted" : ""} ${product.soldout ? "soldOut" : ""}">

        <div class="sold_out_img_container">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}" />
          <p class="soldoutTxt grey">SOLD OUT</p>
        </div>
        <h3>${product.productdisplayname}</h3>
        <p class="subtle">${product.brandname} | ${product.usagetype}</p>
        <p class="price">DKK <span>${product.price}</span>,-</p>
        <div class="discount_element">
          <p>Now DKK <span> ${Math.round(product.price * (1 - product.discount / 100))}</span>,-</p>
          <p class="red"><span>${product.discount}</span>%</p>
        </div>
        <a href="product.html?id=${product.id}">Read More</a>
      </article>`;
  });
}
